"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { projects } from "@/data/projects";

const THEMES = [
  { accent: "#ff3850", backdrop: "#ececf1", frame: "#f7f7fb" },
  { accent: "#3d6df2", backdrop: "#eef1f6", frame: "#f8f9fc" },
  { accent: "#d66a2d", backdrop: "#f2ede8", frame: "#fbf7f3" },
  { accent: "#0d8b74", backdrop: "#e8f0ee", frame: "#f5faf8" },
  { accent: "#5f55d9", backdrop: "#ecebf6", frame: "#f8f7fc" },
  { accent: "#de4d71", backdrop: "#f3eaee", frame: "#fbf7f9" },
  { accent: "#46803a", backdrop: "#edf1ea", frame: "#f8faf6" },
  { accent: "#111111", backdrop: "#ededed", frame: "#f9f9f9" },
  { accent: "#da4f36", backdrop: "#f2ebe8", frame: "#fbf7f4" },
];

const Projects3DScene = dynamic(() => import("@/components/ui/Projects3DScene"), {
  ssr: false,
});

function getTheme(index: number) {
  return THEMES[index % THEMES.length];
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerpColor(a: string, b: string, t: number): string {
  const parse = (hex: string) => {
    const value = hex.replace("#", "");
    return [
      parseInt(value.slice(0, 2), 16),
      parseInt(value.slice(2, 4), 16),
      parseInt(value.slice(4, 6), 16),
    ];
  };

  const [ar, ag, ab] = parse(a);
  const [br, bg, bb] = parse(b);
  const mix = (start: number, end: number) =>
    Math.round(start + (end - start) * t)
      .toString(16)
      .padStart(2, "0");

  return `#${mix(ar, br)}${mix(ag, bg)}${mix(ab, bb)}`;
}

export default function Projects() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const floatingIndexRef = useRef(0);
  const [backgroundColor, setBackgroundColor] = useState(getTheme(0).backdrop);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const pendingIndexRef = useRef<number | null>(null);
  const timersRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const smoothFloatingRef = useRef(0);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const transitionTo = useCallback(
    (nextIndex: number) => {
      if (nextIndex === displayedIndex && phase === "idle") {
        return;
      }

      if (phase !== "idle") {
        pendingIndexRef.current = nextIndex;
        return;
      }

      setPhase("out");

      const outTimer = window.setTimeout(() => {
        const targetIndex = pendingIndexRef.current ?? nextIndex;
        pendingIndexRef.current = null;
        setDisplayedIndex(targetIndex);
        setPhase("in");

        const inTimer = window.setTimeout(() => {
          setPhase("idle");
          if (
            pendingIndexRef.current !== null &&
            pendingIndexRef.current !== targetIndex
          ) {
            const queuedIndex = pendingIndexRef.current;
            pendingIndexRef.current = null;
            transitionTo(queuedIndex);
          }
        }, 320);

        timersRef.current.push(inTimer);
      }, 180);

      timersRef.current.push(outTimer);
    },
    [displayedIndex, phase]
  );

  useEffect(() => {
    let targetFloating = 0;
    let lastBgColor = backgroundColor;
    let bgRafPending = false;

    const updateActiveProject = () => {
      const firstSection = sectionRefs.current[0];
      if (!firstSection) {
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const step = window.innerHeight || 1;
      const rawIndex = clamp(-firstSection.getBoundingClientRect().top / step, 0, projects.length - 1);
      const closestIndex = Math.round(rawIndex);

      targetFloating = rawIndex;
      setActiveIndex((current) => (current === closestIndex ? current : closestIndex));

      // Throttle background color updates via RAF to avoid layout thrashing
      if (!bgRafPending) {
        bgRafPending = true;
        requestAnimationFrame(() => {
          bgRafPending = false;
          const activeRect = sectionRefs.current[closestIndex]?.getBoundingClientRect();
          if (activeRect) {
            const progress =
              (activeRect.top + activeRect.height / 2 - viewportCenter) / window.innerHeight;
            const neighborIndex =
              progress > 0
                ? Math.max(0, closestIndex - 1)
                : Math.min(projects.length - 1, closestIndex + 1);
            const mix = clamp(Math.abs(progress) * 1.2, 0, 1);
            const newColor = lerpColor(
              getTheme(closestIndex).backdrop,
              getTheme(neighborIndex).backdrop,
              mix
            );
            if (newColor !== lastBgColor) {
              lastBgColor = newColor;
              setBackgroundColor(newColor);
            }
          }
        });
      }
    };

    // RAF loop for buttery smooth floating index interpolation — writes to ref only, no setState
    let lastTime = 0;
    const tick = (time: number) => {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.1) : 0.016;
      lastTime = time;

      const factor = 1 - Math.pow(0.0001, delta);
      smoothFloatingRef.current += (targetFloating - smoothFloatingRef.current) * factor;

      if (Math.abs(targetFloating - smoothFloatingRef.current) < 0.0005) {
        smoothFloatingRef.current = targetFloating;
      }

      // Write directly to ref — the 3D scene reads it in useFrame, zero React re-renders
      floatingIndexRef.current = smoothFloatingRef.current;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("scroll", updateActiveProject, { passive: true });
    window.addEventListener("resize", updateActiveProject);
    updateActiveProject();

    return () => {
      window.removeEventListener("scroll", updateActiveProject);
      window.removeEventListener("resize", updateActiveProject);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimers();
    };
  }, [clearTimers]);

  useEffect(() => {
    if (activeIndex !== displayedIndex) {
      transitionTo(activeIndex);
    }
  }, [activeIndex, displayedIndex, transitionTo]);

  const activeProject = projects[displayedIndex];
  const activeTheme = getTheme(displayedIndex);

  const textTransitionStyle = {
    opacity: phase === "out" ? 0 : 1,
    transform: phase === "out" ? "translate3d(0,18px,0)" : "translate3d(0,0,0)",
    willChange: "transform, opacity",
    backfaceVisibility: "hidden" as const,
    transition:
      phase === "out"
        ? "opacity 180ms cubic-bezier(0.55,0,1,0.45), transform 180ms cubic-bezier(0.55,0,1,0.45)"
        : "opacity 320ms cubic-bezier(0.16,1,0.3,1), transform 320ms cubic-bezier(0.16,1,0.3,1)",
  } as const;

  const scrollToProject = useCallback((index: number) => {
    const target = sectionRefs.current[index];
    if (target && window.__lenis) {
      window.__lenis.scrollTo(target, {
        offset: -(window.innerHeight / 2 - target.offsetHeight / 2),
        duration: 0.9,
      });
    }
  }, []);

  const sceneItems = useMemo(
    () => projects.map((project) => ({ id: project.id, title: project.title, image: project.image })),
    []
  );


  return (
    <section
      className="grain-overlay relative"
      style={{
        backgroundColor,
        transition: "background-color 400ms linear",
        willChange: "background-color",
      }}
    >
      <div className="relative">
        {/* Full-screen 3D canvas as background — pointer events enabled for card clicks */}
        <div className="fixed inset-0 z-0 hidden md:left-[60px] lg:block" style={{ transform: "translateZ(0)" }}>
          <Projects3DScene
            items={sceneItems}
            floatingIndexRef={floatingIndexRef}
            onCardClick={scrollToProject}
          />
        </div>

        {/* Text overlay on top of 3D space */}
        <div className="pointer-events-none fixed inset-0 z-10 hidden md:left-[60px] lg:block" style={{ transform: "translateZ(0)" }}>
          <div className="mx-auto flex h-full max-w-[1720px] px-10">
            <div className="relative flex h-full w-[480px] flex-col justify-center pb-20 pt-24">
              <div className="max-w-[480px]" style={textTransitionStyle}>
                <h1
                  className="font-display text-[clamp(4rem,8vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
                  style={{ color: activeTheme.accent }}
                >
                  {activeProject.title}
                </h1>

                <p className="mt-10 max-w-[440px] text-[21px] leading-[1.6] text-black/82">
                  {activeProject.description}
                </p>

              </div>

            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-20 hidden md:left-[60px] lg:block">
          <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-5">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className="pointer-events-auto h-10 w-6"
                aria-label={`Go to ${project.title}`}
                onClick={() => scrollToProject(index)}
              >
                <span
                  className="mx-auto block rounded-full transition-all duration-300"
                  style={{
                    width: activeIndex === index ? "10px" : "8px",
                    height: activeIndex === index ? "22px" : "22px",
                    backgroundColor:
                      activeIndex === index ? activeTheme.accent : "rgba(17,17,17,0.28)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="relative z-0 lg:hidden">
          <div className="space-y-12 px-5 pb-16 pt-20">
            {projects.map((project, index) => {
              const theme = getTheme(index);
              return (
                <article
                  key={project.id}
                  className="rounded-[28px] p-4 shadow-[0_28px_60px_rgba(0,0,0,0.08)]"
                  style={{ backgroundColor: theme.frame }}
                >
                  <div className="relative aspect-[1.12/1] overflow-hidden rounded-[22px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="92vw"
                      className="object-cover"
                    />
                  </div>
                  <h2
                    className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-[-0.06em]"
                    style={{ color: theme.accent }}
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 text-[17px] leading-[1.75] text-black/76">
                    {project.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative z-0 hidden lg:block" aria-hidden="true">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(element) => {
                sectionRefs.current[index] = element;
              }}
              className="h-screen"
            />
          ))}
        </div>
      </div>

    </section>
  );
}
