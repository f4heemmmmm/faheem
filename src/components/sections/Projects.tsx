"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
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

const textVariants = {
  enter: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

export default function Projects() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const floatingIndexRef = useRef(0);
  const bgRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const smoothFloatingRef = useRef(0);

  useEffect(() => {
    let targetFloating = 0;
    let lastBgColor = getTheme(0).backdrop;

    const updateActiveProject = () => {
      const firstSection = sectionRefs.current[0];
      if (!firstSection) return;

      const step = window.innerHeight || 1;
      const rawIndex = clamp(
        -firstSection.getBoundingClientRect().top / step,
        0,
        projects.length - 1
      );
      const closestIndex = Math.round(rawIndex);

      targetFloating = rawIndex;
      setActiveIndex((current) =>
        current === closestIndex ? current : closestIndex
      );

      const viewportCenter = window.innerHeight / 2;
      const activeRect =
        sectionRefs.current[closestIndex]?.getBoundingClientRect();
      if (activeRect && bgRef.current) {
        const progress =
          (activeRect.top + activeRect.height / 2 - viewportCenter) /
          window.innerHeight;
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
          bgRef.current.style.backgroundColor = newColor;
        }
      }
    };

    let lastTime = 0;
    const tick = (time: number) => {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.1) : 0.016;
      lastTime = time;

      const factor = 1 - Math.pow(0.006, delta);
      smoothFloatingRef.current +=
        (targetFloating - smoothFloatingRef.current) * factor;

      if (Math.abs(targetFloating - smoothFloatingRef.current) < 0.0005) {
        smoothFloatingRef.current = targetFloating;
      }

      floatingIndexRef.current = smoothFloatingRef.current;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const lenis = window.__lenis;
    if (lenis) {
      lenis.on("scroll", updateActiveProject);
    } else {
      window.addEventListener("scroll", updateActiveProject, { passive: true });
    }
    window.addEventListener("resize", updateActiveProject);
    updateActiveProject();

    return () => {
      if (lenis) {
        lenis.off("scroll", updateActiveProject);
      } else {
        window.removeEventListener("scroll", updateActiveProject);
      }
      window.removeEventListener("resize", updateActiveProject);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const activeProject = projects[activeIndex];
  const activeTheme = getTheme(activeIndex);

  const scrollToProject = useCallback((index: number) => {
    const target = sectionRefs.current[index];
    if (target && window.__lenis) {
      window.__lenis.scrollTo(target, {
        offset: -(window.innerHeight / 2 - target.offsetHeight / 2),
        duration: 1.2,
      });
    }
  }, []);

  const sceneItems = useMemo(
    () =>
      projects.map((project) => ({
        id: project.id,
        title: project.title,
        image: project.image,
      })),
    []
  );

  return (
    <section
      ref={bgRef}
      className="grain-overlay relative"
      style={{
        backgroundColor: getTheme(0).backdrop,
        willChange: "background-color",
      }}
    >
      <div className="relative">
        <div
          className="fixed inset-0 z-0 hidden md:left-[60px] lg:block"
          style={{ transform: "translateZ(0)" }}
        >
          <Projects3DScene
            items={sceneItems}
            floatingIndexRef={floatingIndexRef}
            onCardClick={scrollToProject}
          />
        </div>

        <div
          className="pointer-events-none fixed inset-0 z-10 hidden md:left-[60px] lg:block"
          style={{ transform: "translateZ(0)" }}
        >
          <div className="mx-auto flex h-full max-w-[1720px] px-10">
            <div className="relative flex h-full w-[480px] flex-col justify-center pb-20 pt-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="max-w-[480px]"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h1
                    className="font-extenda text-[clamp(4rem,8vw,7.5rem)] uppercase font-semibold leading-[0.86] tracking-[-0.02em]"
                    style={{ color: activeTheme.accent }}
                  >
                    {activeProject.title}
                  </h1>

                  <p className="mt-10 max-w-[440px] font-gt-america text-body-xl leading-[1.7] text-black/82">
                    {activeProject.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
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
                    className="mt-6 font-extenda text-[clamp(2rem,8vw,3.25rem)] uppercase leading-[0.95] tracking-[-0.02em]"
                    style={{ color: theme.accent }}
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 font-gt-america text-[17px] leading-[1.75] text-black/76">
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
