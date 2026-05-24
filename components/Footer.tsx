"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-warm/[0.08] bg-ink-mid pt-16 pb-12"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p
              className="font-serif text-warm mb-4"
              style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
            >
              Weara
            </p>
            <p
              className="font-sans text-muted/60 max-w-xs"
              style={{
                fontSize: "clamp(13px, 1.1vw, 16px)",
                lineHeight: 1.7,
              }}
            >
              Dress with intention.
              <br />
              From your wardrobe, your market,
              <br />
              and your people.
            </p>
          </div>

          <div className="hidden md:block">
            <a
              href="#"
              className="font-sans text-muted hover:text-warm block tracking-wide leading-loose transition-colors duration-200"
              style={{ fontSize: "14px" }}
            >
              For buyers
            </a>
            <a
              href="#"
              className="font-sans text-muted hover:text-warm block tracking-wide leading-loose transition-colors duration-200"
              style={{ fontSize: "14px" }}
            >
              For sellers
            </a>
            <a
              href="#"
              className="font-sans text-muted hover:text-warm block tracking-wide leading-loose transition-colors duration-200"
              style={{ fontSize: "14px" }}
            >
              Join waitlist
            </a>
          </div>
        </div>

        <div className="overflow-hidden border-y border-warm/[0.06] py-5 my-8">
          <p className="font-sans text-muted/15 animate-marquee text-xs uppercase tracking-[0.25em] whitespace-nowrap">
            dress with intention &middot; your wardrobe &middot; your market
            &middot; your people &middot; dress with intention &middot; your
            wardrobe &middot; your market &middot; your people &middot; dress
            with intention &middot; your wardrobe &middot; your market &middot;
            your people &middot;
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p
            className="font-sans text-muted/40 tracking-wide"
            style={{ fontSize: "12px" }}
          >
            &copy; 2026 Weara. All rights reserved.
          </p>

          <a
            href="mailto:hello@weara.co"
            className="font-sans text-muted/50 hover:text-warm hover:opacity-100 hidden tracking-wide transition-colors duration-200 md:inline-block"
            style={{ fontSize: "13px" }}
          >
            hello@weara.co
          </a>

          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-muted hover:text-warm tracking-wide transition-colors duration-200"
              style={{ fontSize: "13px" }}
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-sans text-muted hover:text-warm tracking-wide transition-colors duration-200"
              style={{ fontSize: "13px" }}
            >
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
