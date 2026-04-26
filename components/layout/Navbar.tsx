"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { site, waLink } from "@/lib/site";

const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = useMemo(() => (!isHome ? true : scrolled), [isHome, scrolled]);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close mobile menu when the route changes (pathname is the external signal).
  // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional reset on navigation
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
          solid
            ? "bg-sand/80 backdrop-blur-md border-b border-black/10 shadow-[0_10px_30px_rgba(18,20,15,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex h-[68px] items-center justify-between">
            <Link
              href="/"
              className={cn(
                "font-display text-[17px] tracking-tight transition-colors",
                solid ? "text-ink" : "text-sand"
              )}
            >
              <span className="inline-flex items-center gap-2">
                <span className={cn("h-2 w-2 rounded-full", solid ? "bg-copper" : "bg-sand/80")} />
                {site.name}
              </span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-semibold tracking-[0.01em] transition-colors",
                    solid
                      ? "text-ink/75 hover:text-ink"
                      : "text-sand/80 hover:text-sand",
                    pathname === item.href && (solid ? "text-ink" : "text-sand")
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-current/70 transition-transform duration-300",
                      pathname === item.href && "scale-x-100"
                    )}
                  />
                </Link>
              ))}

              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition shadow-[0_12px_26px_rgba(18,20,15,0.10)]",
                  solid
                    ? "bg-copper text-cream hover:bg-copper-hover hover:-translate-y-[1px]"
                    : "bg-white/10 text-sand backdrop-blur-sm hover:bg-white/15 hover:-translate-y-[1px]"
                )}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </nav>

            <button
              type="button"
              className={cn(
                "md:hidden inline-flex items-center justify-center rounded-full border px-3 py-2 transition",
                solid
                  ? "border-black/10 text-ink hover:bg-black/5"
                  : "border-sand/20 text-sand hover:bg-white/10"
              )}
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-72" : "max-h-0"
          )}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-6">
            <div
              className={cn(
                "rounded-2xl border p-4",
                solid
                  ? "border-black/10 bg-cream"
                  : "border-sand/15 bg-ink/60 backdrop-blur-md"
              )}
            >
              <div className="flex flex-col gap-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium transition",
                      solid
                        ? "text-ink/80 hover:bg-black/5 hover:text-ink"
                        : "text-sand/85 hover:bg-white/10 hover:text-sand"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary w-full"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

