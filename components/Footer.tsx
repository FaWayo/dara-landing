"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-ghost/[0.08] bg-[#12131f] pt-16 pb-12"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* TOP ROW */}
        <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-serif text-ghost mb-4 text-3xl">Weara</p>
            <p className="font-sans text-cadet/60 max-w-xs text-sm leading-relaxed">
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
              className="font-sans text-cadet hover:text-ghost block text-sm tracking-wide leading-loose transition-colors duration-200"
            >
              For buyers
            </a>
            <a
              href="#"
              className="font-sans text-cadet hover:text-ghost block text-sm tracking-wide leading-loose transition-colors duration-200"
            >
              For sellers
            </a>
            <a
              href="#"
              className="font-sans text-cadet hover:text-ghost block text-sm tracking-wide leading-loose transition-colors duration-200"
            >
              Join waitlist
            </a>
          </div>
        </div>

        {/* MIDDLE ROW — marquee */}
        <div className="overflow-hidden border-y border-ghost/[0.06] py-5 my-8">
          <p className="font-sans text-cadet/15 animate-marquee text-xs uppercase tracking-[0.25em] whitespace-nowrap">
            dress with intention &middot; your wardrobe &middot; your market
            &middot; your people &middot; dress with intention &middot; your
            wardrobe &middot; your market &middot; your people &middot; dress
            with intention &middot; your wardrobe &middot; your market &middot;
            your people &middot;
          </p>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-cadet/40 text-xs tracking-wide">
            &copy; 2026 Weara. All rights reserved.
          </p>

          <a
            href="mailto:hello@weara.co"
            className="font-sans text-cadet/50 hover:text-ghost hover:opacity-100 hidden text-xs tracking-wide transition-colors duration-200 md:inline-block"
          >
            hello@weara.co
          </a>

          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-cadet hover:text-ghost text-xs tracking-wide transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-sans text-cadet hover:text-ghost text-xs tracking-wide transition-colors duration-200"
            >
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
