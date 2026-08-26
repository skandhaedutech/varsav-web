import { useState } from "react";
import { X } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";

const ITEMS = [
  { src: "/gallery/gallery-2.jpg", title: "Technical Workshop" },
  { src: "/gallery/gallery-3.jpg", title: "Interactive Learning" },
  { src: "/gallery/gallery-4.jpg", title: "Student Achievement & Celebration" },
  { src: "/gallery/gallery-5.jpg", title: "Mentorship & Guidance" },
  { src: "/gallery/gallery-6.jpg", title: "Skill Building & Practice" },
  { src: "/gallery/gallery-7.jpg", title: "Varsav Academy Training Session" },
  { src: "/gallery/gallery-8.jpg", title: "Computer Lab Live Session" },
];

export default function Gallery() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse inside | our campus"
        subtitle="Modern labs, mentor-led sessions and a culture built around learning."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ITEMS.map((item, i) => (
              <button
                key={i}
                onClick={() => setPreview(item.src)}
                className="group relative overflow-hidden rounded-2xl shadow-card hover-lift aspect-[4/3]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-left text-white">
                  <div className="font-semibold text-sm">{item.title}</div>
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
