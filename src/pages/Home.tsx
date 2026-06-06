import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImg from "@/assets/hero-students.jpg";
import labImg from "@/assets/lab-collab.jpg";

function useCounter(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              setValue(Math.floor(target * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { value, ref };
}

function Stat({ value, suffix = "+", label }: { value: number; suffix?: string; label: string }) {
  const { value: v, ref } = useCounter(value);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
        <span ref={ref}>{v}</span>{suffix}
      </div>
      <div className="mt-2 text-sm text-white/70 uppercase tracking-wider">{label}</div>
    </div>
  );
}

const FEATURES = [
  {
    icon: Brain,
    title: "AI And ML",
    desc: "Learn AI And ML Using Python, TensorFlow, And Scikit-Learn. Build Models That Predict, Automate, And Learn From Data.",
    to: "/courses",
  },
  {
    icon: Database,
    title: "Data Science With AI",
    desc: "Turn Data Into Decisions — Learn Python, ML, & Visualization With Real Projects.",
    to: "/courses",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Transform Data Into Insights — Build Your Career With Our Expert Data Analytics Program.",
    to: "/courses",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    desc: "Transform Raw Data Into Powerful Business Strategies.",
    to: "/courses",
  },
];

const WHY = [
  { icon: Target, title: "Industry-Oriented Curriculum", desc: "Learn in-demand skills designed for today's job market." },
  { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced industry professionals." },
  { icon: Briefcase, title: "Placement Assistance", desc: "Career support with resume building and interview preparation." },
  { icon: Award, title: "Project-Based Learning", desc: "Work on real-world projects and build a strong portfolio." },
];

const TESTIMONIALS = [
  {
    name: "Karthik S.",
    role: "AI & Machine Learning Engineer",
    quote:
      "The AI & Machine Learning program gave me strong hands-on experience with Python, Machine Learning, and real-world projects. The mentor support and practical sessions helped me confidently start my career in AI.",
  },
  {
    name: "Priyadharshini M.",
    role: "Data Scientist",
    quote:
      "The Data Science with AI course covered everything from data analysis to machine learning and AI applications. The project-based learning approach helped me build a strong portfolio and improve my problem-solving skills.",
  },
  {
    name: "Arun Kumar R.",
    role: "Full Stack Developer",
    quote:
      "The Full Stack Development training was highly practical and industry-focused. Working on real-time projects with React, Node.js, and databases helped me become job-ready and confident in interviews.",
  },
];

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(at 80% 30%, oklch(0.78 0.14 78 / 0.25), transparent 60%)" }}
        />
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-primary/40 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center py-20">
          <div className="text-white">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.18em] text-gold mb-6 animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              <Sparkles className="h-3.5 w-3.5" /> No. 1 Edu-Tech Center
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-tight tracking-tight animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              Transform Your
              <br />
              Potential Into Success.
              <br />
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-xl animate-fade-up" style={{ animationDelay: "300ms" }}>
              Gain industry-ready skills through expert-led training, real-world projects, and placement support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "450ms" }}>
              <Button asChild size="lg" className="btn-glow bg-gradient-gold text-navy-deep hover:opacity-95 shadow-glow">
                <Link to="/courses">Explore Courses <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-glow border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link to="/contact">Book a Free Demo</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-5 text-sm text-white/70">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="h-8 w-8 rounded-full bg-gradient-gold border-2 border-navy-deep" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div>Rated 4.9 by 500+ learners</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/10">
              <img src={heroImg} alt="Students learning at Skandha" className="w-full h-[420px] object-cover" />
            </div>
            <div className="hidden md:flex absolute -bottom-14 -left-10 glass rounded-2xl p-4 items-center gap-3 animate-float">
              <span className="h-10 w-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-navy-deep" />
              </span>
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Placements</div>
                <div className="text-white font-semibold">95% success rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy-deep relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={1200} label="Students Trained" />
          <Stat value={95} suffix="%" label="Placement Rate" />
          <Stat value={40} label="Hiring Partners" />
          <Stat value={15} label="Expert Mentors" />
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Featured Programs</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
              AI-Driven Courses Built for
              <br className="hidden md:block" />
              Industry and Career Growth
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn AI&ML , Data Analytics,Data Science, SAP FICO & SAP MM, AWS & AZURE and Full Stack Development through real-world
              projects, expert mentorship, and placement-focused training.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 100} variant="up">
                <Link to={f.to} className="group block h-full">
                  <Card className="h-full hover-lift border-border bg-card overflow-hidden">
                    <CardContent className="p-7">
                      <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <f.icon className="h-6 w-6 text-navy-deep" />
                      </div>
                      <h3 className="text-lg font-semibold">{f.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                      <div className="mt-5 text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-smooth">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
          <Reveal variant="left" className="relative">
            <div className="absolute -inset-3 bg-gradient-gold opacity-20 blur-2xl rounded-3xl animate-float" />
            <img
              src={labImg}
              alt="Modern computer lab"
              className="relative rounded-3xl shadow-elegant w-full"
              loading="lazy"
            />
          </Reveal>

          <Reveal variant="right">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Why Skandha</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Industry-Ready Training for Career Success</h2>
            <p className="mt-4 text-muted-foreground">
              Gain practical skills, expert mentorship, and placement support to launch your career with confidence.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 80}>
                  <Card className="h-full hover-lift border-border bg-card">
                    <CardContent className="p-5">
                      <div className="flex gap-3">
                        <span className="h-10 w-10 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center shadow-glow">
                          <w.icon className="h-5 w-5 text-navy-deep" />
                        </span>
                        <div>
                          <h4 className="font-semibold">{w.title}</h4>
                          <p className="text-sm text-muted-foreground mt-2">{w.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Student Stories</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Testimonials</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <Card className="hover-lift border-border h-full">
                  <CardContent className="p-7">
                    <div className="flex gap-0.5 text-gold mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-foreground/80 leading-relaxed">"{t.quote}"</p>
                    <div className="mt-5 pt-5 border-t border-border">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-brand relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(at 30% 50%, oklch(0.78 0.14 78 / 0.35), transparent 60%)" }}
        />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-float" />
        <Reveal variant="scale" className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <GraduationCap className="h-12 w-12 text-gold mx-auto mb-4 animate-float" />
          <h2 className="text-3xl md:text-5xl font-bold">Start Your Tech Career Today</h2>
          <p className="mt-4 text-white/75 max-w-xl mx-auto">
            Gain industry-ready skills through expert training, hands-on projects, and placement support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="btn-glow bg-gradient-gold text-navy-deep hover:opacity-95 shadow-glow">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-glow border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link to="/courses">
                <BookOpen className="mr-1 h-4 w-4" /> See Courses
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
