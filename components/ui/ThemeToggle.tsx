"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "slowburn-theme";

/* The page follows the viewer's system setting until they choose here.
   The choice is stamped on <html> as data-theme, which the stylesheet
   treats as the winner over prefers-color-scheme in both directions.
   The matching no-flash script lives in app/layout.tsx. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stamped = document.documentElement.getAttribute("data-theme");
    if (stamped === "light" || stamped === "dark") {
      setTheme(stamped);
      return;
    }
    setTheme(
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Private browsing: the choice just does not persist. */
    }
  };

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[9999px] border border-line text-ink transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isLight ? (
          <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.6v2.1M12 19.3v2.1M21.4 12h-2.1M4.7 12H2.6M18.6 5.4l-1.5 1.5M6.9 17.1l-1.5 1.5M18.6 18.6l-1.5-1.5M6.9 6.9L5.4 5.4" />
          </>
        )}
      </svg>
    </button>
  );
}
