"use client";

import { useEffect, useRef } from "react";

interface PressureTextProps {
  text: string;
  className?: string;
  minWeight?: number;
  maxWeight?: number;
  radius?: number;
}

/**
 * Renders `text` letter by letter and thickens each letter as the pointer nears
 * it. Rendered as a block-level <span> so it can sit inside a heading.
 *
 * Letter positions are cached and only re-measured on resize/scroll, and the
 * animation loop idles when the pointer has not moved, so an idle page does no
 * layout work.
 */
export default function PressureText({
  text,
  className = "",
  minWeight = 100,
  maxWeight = 900,
  radius = 200,
}: PressureTextProps) {
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const centersRef = useRef<{ x: number; y: number }[]>([]);
  const mouseRef = useRef({ x: -1e4, y: -1e4 });
  const dirtyRef = useRef(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const letters = lettersRef.current;
    if (letters.length === 0) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const measure = () => {
      centersRef.current = letters.map((letter) => {
        if (!letter) return { x: -1e4, y: -1e4 };
        const rect = letter.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
      dirtyRef.current = true;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      dirtyRef.current = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1e4, y: -1e4 };
      dirtyRef.current = true;
    };

    const frame = () => {
      if (dirtyRef.current) {
        dirtyRef.current = false;
        const mouse = mouseRef.current;
        const centers = centersRef.current;

        for (let i = 0; i < letters.length; i++) {
          const letter = letters[i];
          const center = centers[i];
          if (!letter || !center) continue;

          const dx = mouse.x - center.x;
          const dy = mouse.y - center.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - distance / radius);
          const eased = proximity * proximity;

          letter.style.fontWeight = String(
            Math.round(minWeight + eased * (maxWeight - minWeight))
          );
        }
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    measure();
    rafRef.current = requestAnimationFrame(frame);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, [minWeight, maxWeight, radius, text]);

  return (
    <span className={`block ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          ref={(el) => {
            if (el) lettersRef.current[i] = el;
          }}
          className="inline-block transition-[font-weight] duration-200 ease-out"
          style={{ fontWeight: minWeight }}
          aria-hidden="true"
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
