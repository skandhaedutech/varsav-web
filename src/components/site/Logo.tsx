import { Link } from "react-router-dom";
import logo from "../../assets/varsa-logo-transparent.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center group">
      <img
        src={logo}
        alt="Varsav Academy — Learn It. Earn It."
        className={`h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
          variant === "light" ? "brightness-0 invert opacity-95" : ""
        }`}
      />
    </Link>
  );
}