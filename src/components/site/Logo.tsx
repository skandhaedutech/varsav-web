import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textClass = variant === "light" ? "text-white" : "text-foreground";

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logo}
        alt="Skandha Logo"
        className="h-12 w-12 rounded-full object-cover shadow-sm transition-smooth group-hover:scale-105"
      />

      <span className="flex flex-col leading-tight">
        <span className={`font-display font-bold text-base ${textClass}`}>
          Skandha Edu Tech
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-gold">
          Training Center
        </span>
      </span>
    </Link>
  );
}