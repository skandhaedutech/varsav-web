import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
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
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(at 30% 20%, oklch(0.78 0.14 78 / 0.25), transparent 55%)" }}
      />
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        {eyebrow && (
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-gold mb-5 animate-fade-up">
            {eyebrow}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-up">{title}</h1>
        {subtitle && (
          <p
            className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
