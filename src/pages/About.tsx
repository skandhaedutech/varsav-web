import { Link } from "react-router-dom";
import { Award, BookOpen, Compass, Heart, Lightbulb, Rocket, Target, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labImg from "@/assets/lab-collab.jpg";

const PILLARS = [
  { icon: Target, title: "Our Mission", desc: "Make world-class tech education accessible to every motivated learner in Tamil Nadu and beyond." },
  { icon: Compass, title: "Our Vision", desc: "Be the most trusted name in industry-oriented IT training across South India." },
  { icon: Heart, title: "Our Values", desc: "Mentorship, integrity, hands-on craft and a genuine care for every student's outcome." },
];

const WHY = [
  { icon: Users, title: "Expert Mentorship", desc: "Learn from industry professionals." },
  { icon: Rocket, title: "Industry Training", desc: "Skills aligned with current job demands." },
  { icon: BookOpen, title: "Hands-On Projects", desc: "Build real-world project experience." },
  { icon: Lightbulb, title: "Career Support", desc: "Resume building and interview preparation." },
  { icon: Award, title: "Certification", desc: "Earn industry-recognized credentials." },
  { icon: Target, title: "Placement Assistance", desc: "Career guidance and job opportunities." },
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="Crafting India's next | tech generation"
        subtitle="Skandha Edu Tech Training Center is a Salem-based No.1 training institute focused on transforming learners into job-ready professionals."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
            <img
              src={labImg}
              alt="Skandha learning environment"
              className="relative rounded-3xl shadow-elegant w-full"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </div>
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Our Story</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Learn from Industry Experts</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We started Skandha because too many talented students in Salem were graduating with theory but no portfolio.
              We changed that by building a curriculum, classroom and culture that mirrors how modern product teams
              actually work — fast, collaborative, project-driven and kind.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, over a thousand learners later, our students work as developers, designers and digital professionals
              across India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <Card key={p.title} className="hover-lift border-border text-center">
              <CardContent className="p-8">
                <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center shadow-glow">
                  <p.icon className="h-6 w-6 text-navy-deep" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Why Skandha</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Outcome-Focused Training for Career Growth</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((w) => (
              <Card key={w.title} className="hover-lift border-border">
                <CardContent className="p-6 flex gap-4">
                  <span className="h-11 w-11 shrink-0 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold">{w.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Start Your Tech Career</h2>
          <p className="mt-3 text-white/70">Join industry-ready training with expert guidance and placement support.</p>
          <Button asChild size="lg" className="mt-7 bg-gradient-gold text-navy-deep">
            <Link to="/contact">Book a Visit</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
