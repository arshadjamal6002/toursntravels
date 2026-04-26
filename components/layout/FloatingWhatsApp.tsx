"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const isTourDetail = /^\/tours\/[^/]+$/.test(pathname);

  if (isTourDetail) {
    return null;
  }

  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.92, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-copper text-cream shadow-[0_18px_40px_rgba(18,20,15,0.25)] transition hover:bg-copper-hover hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}

