import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number; // negative moves opposite direction, e.g. -0.15 to 0.3
  direction?: "vertical" | "horizontal" | "rotate" | "scale";
  children: React.ReactNode;
  className?: string;
}

/** Max px offset to prevent elements from flying off-screen */
const MAX_OFFSET = 150;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Detect whether parallax should be disabled:
 * - Touch/mobile devices (performance + UX)
 * - prefers-reduced-motion
 */
function shouldDisableParallax(): boolean {
  if (typeof window === "undefined") return true;

  // Respect reduced motion preference
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return true;

  // Disable on touch-primary devices (phones, tablets)
  const isTouchPrimary = window.matchMedia("(pointer: coarse)").matches;
  const isNarrow = window.innerWidth < 768;
  if (isTouchPrimary && isNarrow) return true;

  return false;
}

export function Parallax({
  speed = 0.2,
  direction = "vertical",
  children,
  className,
  ...props
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>("translate3d(0,0,0)");
  const [disabled, setDisabled] = useState(() => shouldDisableParallax());
  const rafId = useRef<number>(0);

  const computeTransform = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const rawOffset = (elementCenter - viewportCenter) * speed;
    const scrollOffset = clamp(rawOffset, -MAX_OFFSET, MAX_OFFSET);

    let transform: string;
    if (direction === "vertical") {
      transform = `translate3d(0, ${scrollOffset}px, 0)`;
    } else if (direction === "horizontal") {
      transform = `translate3d(${scrollOffset}px, 0, 0)`;
    } else if (direction === "rotate") {
      transform = `rotate(${scrollOffset * 0.1}deg)`;
    } else {
      // scale
      const scale = Math.max(0.9, 1 + Math.abs(scrollOffset) * 0.0005);
      transform = `scale(${scale})`;
    }
    setTransformStyle(transform);
  }, [speed, direction]);

  useEffect(() => {
    // Re-check on resize (e.g. rotating tablet)
    const checkDisabled = () => setDisabled(shouldDisableParallax());
    window.addEventListener("resize", checkDisabled, { passive: true });
    return () => window.removeEventListener("resize", checkDisabled);
  }, []);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(computeTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Compute immediately on mount to prevent initial flash
    computeTransform();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [disabled, computeTransform]);

  // When disabled, render children without any transform wrapper overhead
  if (disabled) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{ transform: transformStyle, transition: "transform 0.1s ease-out" }}
      {...props}
    >
      {children}
    </div>
  );
}
