import { useState } from "react";
import { X } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { cn } from "@/lib/utils";
import hero from "@/assets/hero-students.jpg";
import lab from "@/assets/lab-collab.jpg";
import classroom from "@/assets/classroom.jpg";
import placement from "@/assets/placement.jpg";

const ITEMS = [
  { src: hero, cat: "Classroom", title: "Coding Lab", span: "lg:col-span-2 lg:row-span-2" },
  { src: lab, cat: "Workshop", title: "Design Workshop", span: "" },
  { src: classroom, cat: "Training", title: "Live Session", span: "" },
  { src: placement, cat: "Placements", title: "Interview Prep", span: "lg:col-span-2" },
  { src: lab, cat: "Mentors", title: "Mentor Help", span: "" },
  { src: hero, cat: "Classroom", title: "Hands-on Lab", span: "" },
];

const CATS = ["All", "Classroom", "Workshop", "Training", "Placements", "Mentors"] as const;

export default function Gallery() {
  const [active, setActive] = useState<(typeof CATS)[number]>("All");
  const [preview, setPreview] = useState<string | null>(null);
  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse inside | our campus"
        subtitle="Modern labs, mentor-led sessions and a culture built around learning."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-smooth border",
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-card text-foreground/70 border-border hover:bg-muted"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {filtered.map((item, i) => (
              <button
                key={i}
                onClick={() => setPreview(item.src)}
                className={cn("group relative overflow-hidden rounded-2xl shadow-card hover-lift", item.span)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-left text-white">
                  <div className="text-xs uppercase tracking-wider text-gold">{item.cat}</div>
                  <div className="font-semibold">{item.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {preview && (
        <div
          className="fixed inset-0 z-[100] bg-navy-deep/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setPreview(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2 rounded-full glass">
            <X className="h-5 w-5" />
          </button>
          <img src={preview} alt="Preview" className="max-w-6xl max-h-[85vh] rounded-2xl shadow-elegant" />
        </div>
      )}
    </PageShell>
  );
}
