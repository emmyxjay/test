"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { ThemeToggle } from "./ui/ThemeToggle";

const links = [
  { href: "/#system", label: "The system" },
  { href: "/#dial", label: "How it runs" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid || open ? "bg-canvas border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="rail flex h-[72px] items-center justify-between gap-[12px]">
        <Link
          href="/"
          className="text-[16px] font-medium tracking-[-0.01em] text-ink"
          onClick={() => setOpen(false)}
        >
          SLOWBURN
        </Link>

        <ul className="hidden items-center gap-[28px] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[15px] text-ink transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-[12px] md:flex">
          <ThemeToggle />
          <Button href="/#capture" variant="outline">
            Sign in
          </Button>
          <Button href="/#pricing" variant="amber">
            Start the loop
          </Button>
        </div>

        <div className="flex items-center gap-[12px] md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[9999px] border border-line text-ink"
          >
            <span
              className={
                open ? "rotate-45 transition-transform" : "transition-transform"
              }
            >
              <Icon name="plus" size={18} />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-canvas md:hidden">
          <div className="rail flex flex-col gap-[4px] py-[20px]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-[14px] text-[19px] text-ink"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-[20px] flex flex-col gap-[12px]">
              <Button href="/#pricing" variant="amber">
                Start the loop
              </Button>
              <Button href="/#capture" variant="outline">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
