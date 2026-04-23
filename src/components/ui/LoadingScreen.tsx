"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MIN_DURATION = 2800;
const WAVE_SEGMENTS = 60;
const WAVE_SPEED = 3;
const WAVE_FREQUENCY = 5;

function generateWaveClipPath(fillFraction: number, time: number): string {
  // fillFraction 0 = empty (water at bottom), 1 = full (water at top)
  // Water line Y position: 1 = bottom, 0 = top (SVG coords are top-down)
  const waterLineY = 1 - fillFraction;

  const edgeDampen = Math.min(fillFraction / 0.08, 1) * Math.min((1 - fillFraction) / 0.08, 1);

  // Build wave points along the top edge (left to right)
  const wavePoints: string[] = [];
  for (let i = 0; i <= WAVE_SEGMENTS; i++) {
    const t = i / WAVE_SEGMENTS; // 0 to 1 (left to right)

    const w1 = Math.sin(t * Math.PI * WAVE_FREQUENCY + time * WAVE_SPEED) * 0.045;
    const w2 = Math.sin(t * Math.PI * 7 + time * 5.5 + 1.2) * 0.018;
    const w3 = Math.sin(t * Math.PI * 12 + time * 8.0 + 3.0) * 0.008;

    const totalWave = (w1 + w2 + w3) * edgeDampen;
    const y = Math.max(0, Math.min(1, waterLineY + totalWave));
    wavePoints.push(`${t.toFixed(4)},${y.toFixed(4)}`);
  }

  // Path: wave line left-to-right across the top, then down to bottom-right, bottom-left, close
  return `M${wavePoints.join(" L")} L1,1 L0,1 Z`;
}

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const [progress, setProgress] = useState(0);
  const pageReadyRef = useRef(false);
  const timerDoneRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const waveTimeRef = useRef(0);
  const waveRafRef = useRef<number | null>(null);
  const progressRef = useRef(0);

  const tryFinish = useCallback(() => {
    if (!pageReadyRef.current || !timerDoneRef.current) return;

    setProgress(1);
    progressRef.current = 1;

    const t1 = setTimeout(() => {
      setPhase("reveal");
      document.body.classList.add("loaded");
    }, 300);

    const t2 = setTimeout(() => {
      setPhase("done");
    }, 900);

    timersRef.current.push(t1, t2);
  }, []);

  useEffect(() => {
    if (phase === "loading") {
      document.documentElement.style.overflow = "hidden";
    } else if (phase === "done") {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    let lastTime = 0;

    const animate = (now: number) => {
      const delta = lastTime ? (now - lastTime) / 1000 : 0.016;
      lastTime = now;
      waveTimeRef.current += delta;

      if (pathRef.current) {
        const d = generateWaveClipPath(progressRef.current, waveTimeRef.current);
        pathRef.current.setAttribute("d", d);
      }

      waveRafRef.current = requestAnimationFrame(animate);
    };

    waveRafRef.current = requestAnimationFrame(animate);

    return () => {
      if (waveRafRef.current) cancelAnimationFrame(waveRafRef.current);
    };
  }, []);

  useEffect(() => {
    const onReady = () => {
      pageReadyRef.current = true;
      tryFinish();
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady);
    }

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const raw = Math.min(elapsed / MIN_DURATION, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(eased);
      progressRef.current = eased;

      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timerDoneRef.current = true;
        tryFinish();
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onReady);
      timersRef.current.forEach(clearTimeout);
    };
  }, [tryFinish]);

  return (
    <>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            className="fixed inset-0 z-[9999]"
            style={{ height: "100dvh" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="grain-overlay absolute inset-0 bg-[#333333]" />

            <svg
              className="pointer-events-none"
              style={{ position: "absolute", width: 0, height: 0 }}
              aria-hidden="true"
            >
              <defs>
                <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
                  <path ref={pathRef} d="M0,0 L0,0 L0,1 Z" />
                </clipPath>
              </defs>
            </svg>

            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <div className="relative select-none">
                <span
                  className="block font-extenda text-[clamp(3rem,14vw,10rem)] uppercase leading-none text-white/[0.15]"
                  aria-hidden="true"
                >
                  FAHEEM
                </span>

                <span
                  className="absolute inset-0 font-extenda text-[clamp(3rem,14vw,10rem)] uppercase leading-none text-white"
                  style={{
                    clipPath: "url(#wave-clip)",
                    WebkitClipPath: "url(#wave-clip)",
                  }}
                  aria-label="Loading FAHEEM"
                >
                  FAHEEM
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 h-[3px] bg-white/5">
              <div
                className="h-full origin-left bg-white/50"
                style={{
                  transform: `scaleX(${progress})`,
                  willChange: "transform",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: phase === "done" ? 1 : 0,
          transition: phase === "done" ? "opacity 0.4s ease-out" : "none",
          visibility: phase === "done" ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </>
  );
}
