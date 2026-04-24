import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "./cn";

type Variant = "primary" | "ghost" | "dark";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-sand";

  const styles: Record<Variant, string> = {
    primary: "cta-primary",
    ghost: "cta-ghost",
    dark:
      "inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand shadow-[0_14px_30px_rgba(18,20,15,0.25)] hover:-translate-y-[1px] hover:bg-forest-deep",
  };

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}

