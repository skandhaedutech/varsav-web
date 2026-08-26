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
import { Parallax } from "@/components/site/Parallax";
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
      <div className="font-display text-4xl md:text-5xl font-extrabold text-[#64BB4F]">
        <span ref={ref}>{v}</span>{suffix}
      </div>
      <div className="mt-2 text-xs font-bold text-white/70 uppercase tracking-widest">{label}</div>
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
    name: "Navitha.V",
    role: "Data Analytics Student",
    quote:
      "I recently completed the data analytics course at Varsav Academy, T.Nagar, Chennai and it was an excellent learning experience. The course content was comprehensive and covered AI, Python, Machine Learning, Data Visualization with live practical training.",
  },
  {
    name: "ARUN S",
    role: "Full Stack Python Student",
    quote:
      "Excellent learning experience with Varsa Academy. The Full Stack Python course was well-structured, practical, and industry-oriented. The trainer explained concepts clearly with real-time examples, making it easy to build strong hands-on skills. Highly recommended!",
  },
  {
    name: "Sasi Rekha",
    role: "SAP Student",
    quote:
      "I recently completed the SAP course and found it very useful. The training was well-structured, and the instructors explained the concepts clearly. The hands-on practice helped me build confidence. A great choice for anyone planning a career in SAP ❤️",
  },
];

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-hero overflow-hidden pt-12">
        <Parallax speed={-0.3} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-40"
            style={{ backgroundImage: "radial-gradient(at 80% 30%, oklch(0.62 0.18 142 / 0.35), transparent 60%)" }}
          />
        </Parallax>

        <Parallax speed={-0.4} className="absolute top-10 right-10 pointer-events-none">
          <div className="h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
        </Parallax>

        <Parallax speed={0.2} className="absolute bottom-5 left-5 pointer-events-none">
          <div className="h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        </Parallax>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center py-20">
          <div className="lg:col-span-7 text-white space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-md shadow-sm animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Premium Skill Development Institute
            </div>
            
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              Learn Skills.<br />
              <span className="text-[#64BB4F] drop-shadow-md">
                Build Projects.
              </span><br />
              Earn Success.
            </h1>

            <p className="text-lg text-white/80 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "300ms" }}>
              Accelerate your tech career with project-based learning, direct mentor feedback, and guaranteed placement assistance in high-growth roles.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-up" style={{ animationDelay: "450ms" }}>
              <Button asChild size="lg" className="h-12 px-7 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow btn-glow rounded-xl">
                <Link to="/courses">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base font-semibold border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md rounded-xl">
                <Link to="/contact">Book Free Demo</Link>
              </Button>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-sm text-white/80 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-accent border-2 border-background flex items-center justify-center text-[10px] font-bold text-black">
                    {i}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-emerald-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1.5 font-bold text-white">4.9/5</span>
                </div>
                <div className="text-xs text-white/60">Trusted by over 1,200+ ambitious graduates</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <Parallax speed={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-card/10 backdrop-blur-sm">
                <img src={heroImg} alt="Students learning at Varsa Academy" className="w-full h-[440px] object-cover" />
              </div>
            </Parallax>

            {/* Parallax badge floating over hero image */}
            <Parallax speed={-0.2} className="hidden sm:block absolute -bottom-8 -left-8">
              <div className="glass border border-white/20 rounded-2xl p-4 flex items-center gap-4 shadow-2xl backdrop-blur-xl">
                <span className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shadow-lg text-primary-foreground">
                  <TrendingUp className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">Placement Record</div>
                  <div className="text-white text-lg font-bold">95% Career Success</div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0F1A11] border-y border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={1200} label="Students Trained" />
          <Stat value={95} suffix="%" label="Placement Rate" />
          <Stat value={40} label="Hiring Partners" />
          <Stat value={15} label="Expert Mentors" />
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              Featured Programs
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              Industry-Driven Programs Built for Immediate Career Growth
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Master Full Stack, AI & ML, Data Science, AWS, Cybersecurity, and SAP with hands-on projects guided by industry leaders.
            </p>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 100} variant="up">
                <Link to={f.to} className="group block h-full">
                  <Card className="h-full border-border/80 bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-7 flex flex-col justify-between h-full">
                      <div>
                        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <f.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{f.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-border/50 text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Explore Program <ArrowRight className="h-3.5 w-3.5" />
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
      <section className="py-24 bg-secondary/30 border-y border-border/60 relative overflow-hidden">
        <Parallax speed={-0.15} className="absolute -right-20 top-0 pointer-events-none">
          <div className="h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </Parallax>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal variant="left" className="lg:col-span-5 relative">
            <Parallax speed={0.12}>
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-accent opacity-20 blur-xl rounded-3xl" />
              <img
                src={labImg}
                alt="Modern tech learning environment"
                className="relative rounded-3xl shadow-xl border border-border w-full object-cover h-[450px]"
                loading="lazy"
              />
            </Parallax>
          </Reveal>

          <Reveal variant="right" className="lg:col-span-7 space-y-6">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              Why Varsa Academy
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Practical Training Designed For Modern Careers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We focus on building real experience. Every student graduates with a professional project portfolio, direct industry feedback, and dedicated placement preparation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 80}>
                  <Card className="h-full border-border/70 bg-card/80 hover:bg-card hover:shadow-md transition-all rounded-xl">
                    <CardContent className="p-5 flex gap-4 items-start">
                      <span className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                        <w.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-bold text-sm">{w.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{w.desc}</p>
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
        <Parallax speed={-0.3} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-40"
            style={{ backgroundImage: "radial-gradient(at 30% 50%, oklch(0.62 0.18 142 / 0.4), transparent 60%)" }}
          />
        </Parallax>

        <Parallax speed={0.25} className="absolute -top-20 -right-20 pointer-events-none">
          <div className="h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float-slow" />
        </Parallax>

        <Reveal variant="scale" className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4 animate-float" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Start Your Tech Career Today</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto leading-relaxed">
            Gain industry-ready skills through expert training, hands-on projects, and placement support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-7 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow btn-glow rounded-xl">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base font-semibold border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md rounded-xl"
            >
              <Link to="/courses">
                <BookOpen className="mr-2 h-4 w-4" /> View All Courses
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
