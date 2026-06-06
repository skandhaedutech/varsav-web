import emailjs from "@emailjs/browser";
import { useState } from "react";
import { z } from "zod";
import { Facebook, Instagram, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

const COURSES = [
  "AI & Machine Learning",
  "Data Science with AI",
  "Data Analytics",
  "Business Analytics",
  "Business Analyst",
  "Cloud Computing",
  "Digital Marketing",
  "Financial Program",
  "PMP Course",
  "SAP Course",
  "HR Analytics",
  "Full Stack Development",
];

const FAQ = [
  { q: "Do you offer placement support?", a: "Yes. Every program includes resume building, mock interviews and direct referrals to our hiring partners." },
  { q: "Are batches in-person or online?", a: "We run both in-person batches at our Salem campus and hybrid online sessions for select courses." },
  { q: "Do I need a coding background?", a: "No. Most of our beginner tracks assume zero prior experience — we start from fundamentals." },
  { q: "How long are the courses?", a: "Anywhere from 2 to 6 months depending on the program. See the Courses page for each track." },
  { q: "Will I get a certificate?", a: "Yes. You receive a verified completion certificate plus a portfolio of real projects." },
  { q: "Can I pay in installments?", a: "Yes, we offer flexible installment plans. Talk to our team for details." },
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  course: z.string().min(1, "Please select a course"),
  message: z.string().trim().min(5, "Please share a short message").max(1000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    try {
      setSubmitting(true);
      await emailjs.send(
        "service_z4y4rad",
        "template_s69u7m8",
        { name: form.name, phone: form.phone, email: form.email, course: form.course, message: form.message },
        "15No8zyHkQ97lEHDg"
      );
      toast.success("Message sent successfully!");
      setForm({ name: "", phone: "", email: "", course: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Get in Touch"
        title="Learn In-Demand Skills|Get Job Ready"
        subtitle="Explore industry-focused training programs with expert mentorship, hands-on projects, and placement support."
      />

      {/* CONTACT CARDS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: "Call Us", lines: ["+91 8248143913 | +91 6382043554"], href: "tel:+918248143913" },
            { icon: Mail, title: "Email Us", lines: ["skandhaedutechtrainingcenter@gmail.com"], href: "mailto:skandhaedutechtrainingcenter@gmail.com" },
            { icon: MapPin, title: "Visit Us", lines: ["No.46, Maravaneri Main Road,", "Maravaneri, Salem, Tamil Nadu - 636007"] },
          ].map((c) => (
            <Card key={c.title} className="hover-lift border-border">
              <CardContent className="p-7">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-glow">
                  <c.icon className="h-6 w-6 text-navy-deep" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="mt-2 block text-sm text-muted-foreground hover:text-primary break-words">
                    {c.lines.join(" ")}
                  </a>
                ) : (
                  <div className="mt-2 text-sm text-muted-foreground">
                    {c.lines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardContent className="p-7">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">We typically reply within one business day.</p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="10-digit mobile number" />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label>Course Interested In</Label>
                  <Select value={form.course} onValueChange={(v) => update("course", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {COURSES.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.course && <p className="text-xs text-destructive mt-1">{errors.course}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us what you're looking for..." />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" disabled={submitting} className="w-full bg-gradient-brand text-primary-foreground shadow-glow">
                  <Send className="mr-2 h-4 w-4" /> {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[500px] w-full">
                <iframe
                  title="Skandha campus map"
                  src="https://www.google.com/maps?q=Maravaneri+Main+Road+Salem+Tamil+Nadu+636007&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Follow Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Join the Skandha community</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/share/1BJnRUVjqx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover-lift"
            >
              <span className="h-11 w-11 rounded-xl bg-gradient-gold flex items-center justify-center">
                <Facebook className="h-5 w-5 text-navy-deep" />
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Facebook</div>
                <div className="font-semibold">Skandha Educational Training Center</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/skandhaedutech_trainingcenter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover-lift"
            >
              <span className="h-11 w-11 rounded-xl bg-gradient-gold flex items-center justify-center">
                <Instagram className="h-5 w-5 text-navy-deep" />
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Instagram</div>
                <div className="font-semibold">@skandhaedutech_trainingcenter</div>
              </div>
            </a>
            <a
              href="https://chat.whatsapp.com/Ib1ExRBnxNq1auuTKskcko"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover-lift"
            >
              <span className="h-11 w-11 rounded-xl bg-gradient-gold flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-navy-deep" />
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">Join Our WhatsApp Group</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Start your learning journey today</h2>
          <p className="mt-3 text-white/70">A 15-minute call with our team can change your career path.</p>
          <Button asChild size="lg" className="mt-7 bg-gradient-gold text-navy-deep">
            <a href="tel:+918248143913">Call +91 8248143913</a>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
