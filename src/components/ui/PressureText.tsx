"use client";

import { useEffect, useRef, useCallback } from "react";

interface PressureTextProps {
  text: string;
  className?: string;
  minWeight?: number;
  maxWeight?: number;
  radius?: number;
}

export default function PressureText({
  text,
  className = "",
  minWeight = 100,
  maxWeight = 900,
  radius = 200,
}: PressureTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  const updateLetters = useCallback(() => {
    const letters = lettersRef.current;
    const mouse = mouseRef.current;

    for (const letter of letters) {
      if (!letter) continue;
      const rect = letter.getBoundingClientRect();
      const letterX = rect.left + rect.width / 2;
      const letterY = rect.top + rect.height / 2;

      const dx = mouse.x - letterX;
      const dy = mouse.y - letterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const proximity = Math.max(0, 1 - distance / radius);
      // Ease out for smoother falloff
      const eased = proximity * proximity;
      const weight = Math.round(minWeight + eased * (maxWeight - minWeight));

      letter.style.fontWeight = String(weight);
    }

    rafRef.current = requestAnimationFrame(updateLetters);
  }, [minWeight, maxWeight, radius]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(updateLetters);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateLetters]);

  return (
    <div ref={containerRef} className={className} aria-label={text}>
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
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
