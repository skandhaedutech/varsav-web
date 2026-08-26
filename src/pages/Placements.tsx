import { Link } from "react-router-dom";
import { Briefcase, FileText, MessagesSquare, Target, TrendingUp, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Parallax } from "@/components/site/Parallax";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import placementImg from "@/assets/placement.jpg";

const PROCESS = [
  { icon: Target, title: "Skill Assessment", desc: "We map your strengths and target roles." },
  { icon: FileText, title: "Resume & Portfolio", desc: "Recruiter-friendly resume + project portfolio." },
  { icon: MessagesSquare, title: "Mock Interviews", desc: "Tech + HR rounds with real feedback." },
  { icon: Briefcase, title: "Company Connects", desc: "Direct referrals to our hiring partners." },
];

const STATS = [
  { value: "95%", label: "Placement Rate" },
  { value: "40+", label: "Hiring Partners" },
  { value: "₹4.5L", label: "Avg. Starting CTC" },
  { value: "1200+", label: "Careers Launched" },
];

const STORIES = [
  {
    name: "Arun K.",
    role: "AI & Machine Learning Engineer",
    quote: "The AI & Machine Learning program helped me gain practical skills through real-world projects and expert mentorship.",
  },
  {
    name: "Priya S.",
    role: "Data Scientist",
    quote: "The Data Science with AI course gave me hands-on experience in analytics, machine learning, and industry-focused projects.",
  },
  {
    name: "Karthik R.",
    role: "Full Stack Developer",
    quote: "The Full Stack Development training helped me build real applications and prepare confidently for technical interviews.",
  },
];

export default function Placements() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Placements & Careers"
        title="Get Trained | Get Placed"
        subtitle="Dedicated career cell offering 1-on-1 resume tailoring, mock interviews, and direct hiring partner connections."
      />

      <section className="py-16 bg-secondary/30 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <Parallax key={s.label} speed={0.05 * (i + 1)}>
              <Card className="text-center border-border/80 bg-card rounded-2xl">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#64BB4F] font-display">{s.value}</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </CardContent>
              </Card>
            </Parallax>
          ))}
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <Parallax speed={-0.15} className="absolute -left-20 top-10 pointer-events-none">
          <div className="h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </Parallax>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Parallax speed={0.12} className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-accent opacity-20 blur-xl rounded-3xl" />
            <img
              src={placementImg}
              alt="Placement interview"
              className="relative rounded-3xl shadow-xl border border-border w-full object-cover"
              loading="lazy"
            />
          </Parallax>
          
          <div className="space-y-6">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">A Structured Path to Your Dream Role</h2>
            <p className="text-muted-foreground leading-relaxed">
              We don't stop at training. Our placement cell walks every learner through a proven 4-step framework to land high-growth tech positions.
            </p>
            <div className="space-y-4 pt-2">
              {PROCESS.map((p, i) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <span className="h-10 w-10 shrink-0 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <p.icon className="h-4 w-4 text-primary" /> {p.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              Alumni Success
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Recent Placement Reviews</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {STORIES.map((s, i) => (
              <Parallax key={s.name} speed={0.08 * (i + 1)}>
                <Card className="border-border/80 bg-card rounded-2xl h-full">
                  <CardContent className="p-7">
                    <TrendingUp className="h-6 w-6 text-[#64BB4F]" />
                    <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{s.quote}"</p>
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="font-bold text-sm">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <Users className="h-10 w-10 text-emerald-400 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Accelerate Your Tech Career Today</h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">Talk to our career counselors to evaluate your resume and find your ideal program.</p>
          <div className="pt-3">
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold bg-white text-black hover:bg-white/90 rounded-xl shadow-xl">
              <Link to="/contact">Talk to Placement Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
