import { Link } from "react-router-dom";
import { Briefcase, FileText, MessagesSquare, Target, TrendingUp, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
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
        eyebrow="Placements"
        title="Get Trained | Get Placed"
        subtitle="Placement support with resume building, mock interviews, and career guidance."
      />

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <Card key={s.label} className="text-center border-border">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold font-display">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
            <img
              src={placementImg}
              alt="Placement interview"
              className="relative rounded-3xl shadow-elegant w-full"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </div>
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">The Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">A Structured Path to Your First Job</h2>
            <p className="mt-4 text-muted-foreground">
              We don't stop at training. Our placement cell walks every learner through a proven, four-step path to
              landing the right role.
            </p>
            <div className="mt-8 space-y-5">
              {PROCESS.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <span className="h-11 w-11 shrink-0 rounded-xl bg-gradient-gold text-navy-deep flex items-center justify-center font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-semibold flex items-center gap-2">
                      <p.icon className="h-4 w-4 text-primary" /> {p.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Testimonials</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Placement Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STORIES.map((s) => (
              <Card key={s.name} className="hover-lift border-border">
                <CardContent className="p-7">
                  <TrendingUp className="h-6 w-6 text-gold" />
                  <p className="mt-4 text-foreground/80">"{s.quote}"</p>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <Users className="h-10 w-10 text-gold mx-auto" />
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Build Your Future Today</h2>
          <Button asChild size="lg" className="mt-7 bg-gradient-gold text-navy-deep">
            <Link to="/contact">Talk to Our Experts</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
