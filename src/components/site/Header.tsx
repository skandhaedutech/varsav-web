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
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-2"
          : "bg-black/40 backdrop-blur-md border-b border-white/10 py-3"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Logo variant={scrolled ? "dark" : "light"} />
        
        <nav
          className={cn(
            "hidden lg:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300",
            scrolled
              ? "bg-gray-100/80 border-gray-200"
              : "bg-white/10 border-white/15 backdrop-blur-md"
          )}
        >
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-[#64BB4F] text-white shadow-md"
                    : scrolled
                    ? "text-gray-800 hover:text-black hover:bg-gray-200/70"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="h-10 px-5 text-xs uppercase tracking-wider font-bold bg-[#64BB4F] hover:bg-[#4e9c3e] text-white shadow-md rounded-full">
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className={cn("lg:hidden p-2 rounded-md", scrolled ? "text-gray-900" : "text-white")}
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
