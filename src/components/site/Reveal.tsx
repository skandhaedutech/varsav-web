import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "fade" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref}
      style={style}
      className={cn("reveal", `reveal-${variant}`, visible && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}
