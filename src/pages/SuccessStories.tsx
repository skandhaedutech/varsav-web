import { Link } from "react-router-dom";
import { Quote, Star } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const STORIES = [
  {
    name: "Arun K.",
    before: "Graduate with no programming experience",
    after: "Full Stack Developer at a software company",
    role: "Full Stack Developer",
    batch: "Full Stack Development 2024",
    quote: "The hands-on projects and mentor support helped me become job-ready and confident in interviews.",
  },
  {
    name: "Priya S.",
    before: "B.Sc Mathematics graduate",
    after: "Data Analyst at a leading organization",
    role: "Data Analyst",
    batch: "Data Analytics 2024",
    quote: "The practical training in Excel, SQL, and Power BI helped me build strong analytical skills.",
  },
  {
    name: "Karthik R.",
    before: "Final-year engineering student",
    after: "AI & Machine Learning Engineer",
    role: "AI Engineer",
    batch: "AI & Machine Learning 2024",
    quote: "Real-world AI projects and expert guidance gave me the confidence to start my career in AI.",
  },
  {
    name: "Divya M.",
    before: "Commerce graduate exploring tech careers",
    after: "Data Scientist",
    role: "Data Scientist",
    batch: "Data Science with AI 2024",
    quote: "The combination of data science, machine learning, and project-based learning was invaluable.",
  },
  {
    name: "Meena J.",
    before: "Working professional seeking career growth",
    after: "SAP Consultant",
    role: "SAP Consultant",
    batch: "SAP Course 2024",
    quote: "The industry-focused curriculum and practical exposure helped me transition into the SAP domain.",
  },
  {
    name: "Sundar P.",
    before: "Business graduate looking for new opportunities",
    after: "Business Analyst",
    role: "Business Analyst",
    batch: "Business Analyst 2024",
    quote: "The training improved my analytical thinking, documentation skills, and interview confidence.",
  },
];

export default function SuccessStories() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Success Stories"
        title="From Learning | To Success"
        subtitle="Every student has a story. Here are a few that inspire us every day."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {STORIES.map((s) => (
            <Card key={s.name} className="hover-lift border-border overflow-hidden">
              <CardContent className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-12 w-12 rounded-full bg-gradient-gold text-navy-deep font-bold flex items-center justify-center">
                      {s.name[0]}
                    </span>
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {s.role} · {s.batch}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="mt-5 h-7 w-7 text-gold/40" />
                <p className="mt-2 text-foreground/80 leading-relaxed">"{s.quote}"</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-muted p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Before</div>
                    <div className="text-sm mt-1">{s.before}</div>
                  </div>
                  <div className="rounded-xl bg-gradient-brand text-white p-3">
                    <div className="text-[10px] uppercase tracking-wider text-gold">After</div>
                    <div className="text-sm mt-1">{s.after}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Your story could be next</h2>
          <Button asChild size="lg" className="mt-7 bg-gradient-gold text-navy-deep">
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
