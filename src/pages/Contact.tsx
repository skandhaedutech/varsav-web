import emailjs from "@emailjs/browser";
import { useState } from "react";
import { z } from "zod";
import { Facebook, Instagram, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Parallax } from "@/components/site/Parallax";
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

/* ── EmailJS configuration from environment variables ──────────────────── */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS SDK once at module load
emailjs.init(EMAILJS_PUBLIC_KEY);

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

    // Validate that EmailJS config is present
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("Email service is not configured. Please contact us directly at varsavacademy@gmail.com");
      return;
    }

    try {
      setSubmitting(true);
      setErrors({});

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_phone: form.phone,
          from_email: form.email,
          reply_to: form.email,
          course: form.course,
          message: form.message,
          // Legacy field names for backward compatibility with existing template
          name: form.name,
          phone: form.phone,
          email: form.email,
        }
      );
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", course: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS error:", error);
      if (error?.status === 412) {
        toast.error("Email service configuration error. Please contact us directly at varsavacademy@gmail.com");
      } else {
        toast.error("Failed to send message. Please try again or call us at +91 94884 40085");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Get in Touch"
        title="Learn In-Demand Skills | Get Job Ready"
        subtitle="Explore industry-focused training programs with expert mentorship, hands-on projects, and placement support."
      />

      {/* CONTACT CARDS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: "Call Us", lines: ["+91 94884 40085"], href: "tel:+919488440085" },
            { icon: Mail, title: "Email Us", lines: ["varsavacademy@gmail.com"], href: "mailto:varsavacademy@gmail.com" },
            { icon: MapPin, title: "Visit Us", lines: ["35 Gopal Street, T.Nagar,", "Chennai, Tamil Nadu 600017"] },
          ].map((c, i) => (
            <Parallax key={c.title} speed={0.06 * (i + 1)}>
              <Card className="border-border/80 bg-card hover:border-primary/50 rounded-2xl transition-all duration-300 h-full">
                <CardContent className="p-7 h-full">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="mt-2 block text-xs text-muted-foreground hover:text-primary break-words">
                      {c.lines.join(" ")}
                    </a>
                  ) : (
                    <div className="mt-2 text-xs text-muted-foreground">
                      {c.lines.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Parallax>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section id="contact-form" className="py-16 bg-secondary/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Card className="border-border/80 rounded-2xl bg-card">
            <CardContent className="p-7">
              <h2 className="text-2xl font-extrabold tracking-tight">Send us a message</h2>
              <p className="mt-1 text-xs text-muted-foreground">We typically reply within one business day.</p>
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
                <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl">
                  <Send className="mr-2 h-4 w-4" /> {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border/80 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[500px] w-full">
                <iframe
                  title="Varsa Academy campus map"
                  src="https://www.google.com/maps?q=35+Gopal+Street+T.Nagar+Chennai+Tamil+Nadu+600017&output=embed"
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
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">Follow Us</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Join the Varsa Community</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/share/1BJnRUVjqx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all shadow-sm"
            >
              <span className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Facebook className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Facebook</div>
                <div className="font-bold text-sm">Varsa Educational Center</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/skandhaedutech_trainingcenter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all shadow-sm"
            >
              <span className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Instagram className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Instagram</div>
                <div className="font-bold text-sm">@skandhaedutech_trainingcenter</div>
              </div>
            </a>
            <a
              href="https://chat.whatsapp.com/Ib1ExRBnxNq1auuTKskcko"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all shadow-sm"
            >
              <span className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-bold text-sm">Join Our WhatsApp Group</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30 border-y border-border/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">FAQ</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Start Your Career Journey Today</h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">A 15-minute consultation with our advisors can transform your career trajectory.</p>
          <div className="pt-3">
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold bg-white text-black hover:bg-white/90 rounded-xl shadow-xl">
              <a href="tel:+919488440085">Call +91 94884 40085</a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
