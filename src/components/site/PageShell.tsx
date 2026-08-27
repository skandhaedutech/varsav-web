import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Parallax } from "./Parallax";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      <Header />
      <main className="flex-1 relative z-0">
        {/* Global subtle parallax background elements for all pages */}
        <Parallax speed={-0.15} className="absolute left-[-10%] top-[20%] pointer-events-none z-[-1] opacity-20 hidden md:block">
          <div className="h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        </Parallax>
        <Parallax speed={0.12} className="absolute right-[-5%] top-[60%] pointer-events-none z-[-1] opacity-15 hidden md:block">
          <div className="h-[500px] w-[500px] rounded-full bg-primary/20 blur-[150px]" />
        </Parallax>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden pt-20">
      <Parallax speed={-0.3} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(at 30% 20%, oklch(0.62 0.18 142 / 0.35), transparent 55%)" }}
        />
      </Parallax>

      <Parallax speed={-0.4} className="absolute top-10 right-10 pointer-events-none">
        <div className="h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      </Parallax>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center space-y-4">
        {eyebrow && (
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs uppercase tracking-[0.2em] font-bold text-primary-foreground backdrop-blur-md shadow-sm animate-fade-up">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight animate-fade-up">{title}</h1>
        {subtitle && (
          <p
            className="mt-4 text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
