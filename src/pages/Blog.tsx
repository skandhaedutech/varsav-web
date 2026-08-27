import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Parallax } from "@/components/site/Parallax";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { POSTS } from "@/data/blogPosts";

export default function Blog() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog & Insights"
        title="Career Tips, Technology Ideas, | Hiring Insights"
        subtitle="Honest, practical writing from our mentors and placement team at Varsav Academy."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <Parallax key={p.id} speed={0.05 * ((i % 3) + 1)}>
              <Card className="hover-lift border-border overflow-hidden group flex flex-col h-full">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-gradient-gold text-navy-deep text-xs font-semibold px-2.5 py-1 rounded-full">
                  {p.cat}
                </span>
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.read}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug flex-1">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <Button
                  asChild
                  className="mt-5 w-full bg-primary text-primary-foreground hover:opacity-90"
                >
                  <Link to={`/blog/${p.id}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
              </Card>
            </Parallax>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
