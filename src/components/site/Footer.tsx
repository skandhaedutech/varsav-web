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
  "Full Stack Development",
  "AWS & Azure",
  "Cybersecurity",
  "SAP FICO S/4HANA",
  "Digital Marketing",
  "Tally Prime",
  "UI/UX Design",
];

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(at 50% 0%, oklch(0.62 0.18 142 / 0.3), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-white/70 leading-relaxed">
              Varsa Academy is Chennai's premier institute empowering students & professionals with cutting-edge IT & management skills.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/1BJnRUVjqx/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/skandhaedutech_trainingcenter/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/skandhaedutech-training-center-3b84b440a/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-emerald-400 mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-emerald-400 mb-4 uppercase tracking-widest">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {COURSES.map((c) => (
                <li key={c}>
                  <Link to="/courses" className="hover:text-white transition-colors">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-emerald-400 mb-4 uppercase tracking-widest">Reach Us</h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>35 Gopal Street, T.Nagar, Chennai, Tamil Nadu 600017</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="tel:+919488440085" className="hover:text-white transition-colors">+91 94884 40085</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="mailto:varsavacademy@gmail.com" className="hover:text-white transition-colors break-all">
                  varsavacademy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Varsa Academy. All rights reserved.</p>
          <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
