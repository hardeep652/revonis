import { Mail } from "lucide-react";
import { COLORS } from "./home-data";
import { InstagramIcon, LinkedInIcon } from "./brand-icons";

export function Footer() {
  return (
    <footer className="border-t px-6 py-12" style={{ borderColor: COLORS.border }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <span className="flex items-center gap-2.5">
          <img
            src="/Revonis_Logo%20(Edited).png"
            alt="Revonis"
            className="h-9 w-auto rounded-lg object-contain"
            style={{ filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.15))" }}
          />
        </span>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@revonis.com" aria-label="Email" style={{ color: COLORS.textSecondary }}>
            <Mail className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" style={{ color: COLORS.textSecondary }}>
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" style={{ color: COLORS.textSecondary }}>
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
        <span className="text-xs" style={{ color: COLORS.textSecondary }}>
          © {new Date().getFullYear()} Revonis. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

