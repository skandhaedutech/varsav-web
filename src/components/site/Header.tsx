import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/placements", label: "Placements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/success-stories", label: "Success" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "nav-link px-3 py-2 text-sm font-medium transition-smooth",
                  isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="btn-glow bg-gradient-brand text-primary-foreground hover:opacity-95 shadow-glow">
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted",
                    isActive ? "bg-muted text-foreground" : ""
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 bg-gradient-brand text-primary-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>Enroll Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
