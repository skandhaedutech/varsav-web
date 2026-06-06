import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/placements", label: "Placements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const COURSES = [
  "AI And ML",
  "Data Science With AI",
  "Data Analytics",
  "Business Analytics",
  "Full Stack Development",
  "AWS & Azure",
  "Cybersecurity",
  "SAP FICO",
  "SAP MM",
  "Digital Marketing",
  "Financial Modelling",
  "Tally Prime",
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-brand text-primary-foreground overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(at 80% 0%, oklch(0.78 0.14 78 / 0.35), transparent 50%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-white/70 leading-relaxed">
              Skandha Edu Tech training center crafting industry-ready developers, designers, and digital professionals in Salem, Tamil Nadu.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/1BJnRUVjqx/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-deep transition-smooth"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/skandhaedutech_trainingcenter/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-deep transition-smooth"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/skandhaedutech-training-center-3b84b440a/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-deep transition-smooth"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/70 hover:text-gold transition-smooth">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2.5">
              {COURSES.map((c) => (
                <li key={c}>
                  <Link to="/courses" className="text-sm text-white/70 hover:text-gold transition-smooth">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Reach Us</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>No.46, Maravaneri Main Road, Maravaneri, Salem, Tamil Nadu - 636007</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href="tel:+918248143913" className="hover:text-gold transition-smooth">+91 8248143913 | +91 6382043554</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="mailto:skandhaedutechtrainingcenter@gmail.com"
                  className="hover:text-gold transition-smooth break-all"
                >
                  skandhaedutechtrainingcenter@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Skandha Edu Tech Training Center. All rights reserved.</p>
          <p>Designed & Developed by Trywicks Tech</p>
          <Link to="/terms-and-conditions" className="hover:text-gold transition-smooth">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
