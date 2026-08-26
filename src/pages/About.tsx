import { Link } from "react-router-dom";
import { Award, BookOpen, Compass, Heart, Lightbulb, Rocket, Target, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Parallax } from "@/components/site/Parallax";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labImg from "@/assets/lab-collab.jpg";

const PILLARS = [
  { icon: Target, title: "Our Mission", desc: "Make world-class tech and professional education accessible to every motivated learner in Salem and across India." },
  { icon: Compass, title: "Our Vision", desc: "Be the most trusted institute for practical, industry-aligned career acceleration." },
  { icon: Heart, title: "Our Values", desc: "Hands-on mastery, transparent guidance, and continuous commitment to every graduate's success." },
];

const WHY = [
  { icon: Users, title: "Expert Mentorship", desc: "Learn directly from active industry professionals." },
  { icon: Rocket, title: "Job-Aligned Curriculum", desc: "Skills updated to meet real company requirements." },
  { icon: BookOpen, title: "Portfolio-Grade Projects", desc: "Build impressive real-world software & case studies." },
  { icon: Lightbulb, title: "1-on-1 Placement Coaching", desc: "Personalized resume engineering and mock interviews." },
  { icon: Award, title: "Recognized Certification", desc: "Earn credentials valued by top employers." },
  { icon: Target, title: "Placement Network", desc: "Direct access to hiring partners across tech hubs." },
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Varsa Academy"
        title="Transforming Ambition Into High-Growth Careers"
        subtitle="Varsa Academy is Salem's premier institute empowering students and working professionals with industry-ready technical and management expertise."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Parallax speed={0.1} className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-accent opacity-20 blur-xl rounded-3xl" />
            <img
              src={labImg}
              alt="Varsa Academy collaborative environment"
              className="relative rounded-3xl shadow-xl border border-border/80 w-full object-cover"
              loading="lazy"
            />
          </Parallax>
          
          <div className="space-y-5">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              Our Origin Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Practical Learning Built For Real Impact</h2>
            <p className="text-muted-foreground leading-relaxed">
              We founded Varsa Academy because traditional education leaves a gap between theoretical knowledge and real-world execution. 
              Our hands-on programs bridge that gap by matching classroom practice to actual engineering and business workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 1,200 successful graduates, our alumni now thrive as developers, data analysts, AI engineers, cloud specialists, and business leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <Card key={p.title} className="border-border/80 bg-card hover:border-primary/50 text-center rounded-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="h-12 w-12 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 font-bold">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              The Varsa Advantage
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Outcome-Focused Training</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((w) => (
              <Card key={w.title} className="border-border/80 bg-card hover:border-primary/50 rounded-2xl transition-all duration-300">
                <CardContent className="p-6 flex gap-4 items-start">
                  <span className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-sm">{w.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready To Elevate Your Career?</h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">Visit our campus or schedule a free online counseling session to start your journey.</p>
          <div className="pt-3">
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold bg-white text-black hover:bg-white/90 rounded-xl shadow-xl">
              <Link to="/contact">Book Campus Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
