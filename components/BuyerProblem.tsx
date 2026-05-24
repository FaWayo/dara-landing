"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const beats = [
  {
    number: "01",
    statement: "The inspiration never makes it home.",
    support: "You save it on Pinterest. You open your wardrobe. The gap between the two is just \u2014 there.",
    reversed: false,
  },
  {
    number: "02",
    statement: "The algorithm buried her.",
    support: "The seller with exactly what you wanted had 300 followers. You never saw her.",
    reversed: true,
  },
  {
    number: "03",
    statement: "You found it. Then it vanished.",
    support: "24 hours. Story gone. Contact lost somewhere in your camera roll.",
    reversed: false,
  },
];

function Beat({ beat, index }: { beat: (typeof beats)[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const content = (
    <div>
      <span className="font-sans tracking-[0.2em] text-red opacity-70 mb-4 block"
        style={{ fontSize: "12px" }}
      >
        {beat.number}
      </span>
      <motion.h3
        initial={{ opacity: 0, x: beat.reversed ? 16 : -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-ink max-w-lg"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(36px, 5vw, 72px)",
          fontWeight: 400,
          lineHeight: 1.1,
        }}
      >
        {beat.statement}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        className="font-sans text-[#4A4A5A] mt-4"
        style={{
          fontSize: "clamp(16px, 1.4vw, 20px)",
          lineHeight: 1.7,
          maxWidth: "480px",
        }}
      >
        {beat.support}
      </motion.p>
    </div>
  );

  return (
    <div ref={ref} className="py-16 md:py-20 border-t border-ink/[0.08]">
      {content}
    </div>
  );
}

export default function BuyerProblem() {
  const openerRef = useRef(null);
  const openerInView = useInView(openerRef, { once: true });

  return (
    <section className="bg-[#E8E0D5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div ref={openerRef} className="mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={openerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-sans text-xs tracking-[0.2em] uppercase text-red mb-6 block"
          >
            THE PROBLEM
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={openerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-ink max-w-2xl"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            You have a full wardrobe.
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={openerInView ? { opacity: 0.45, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="text-ink/45"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            You still have nothing to wear.
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={openerInView ? { width: 64 } : {}}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="h-px bg-red mt-8"
          />
        </div>

        <div className="h-8 overflow-hidden mb-4 relative">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap absolute"
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-ink opacity-20 inline-block pr-4">
              wardrobe {"\u00B7"} inspiration {"\u00B7"} discovery {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-ink opacity-20 inline-block pr-4">
              wardrobe {"\u00B7"} inspiration {"\u00B7"} discovery {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-ink opacity-20 inline-block pr-4">
              wardrobe {"\u00B7"} inspiration {"\u00B7"} discovery {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-ink opacity-20 inline-block pr-4">
              wardrobe {"\u00B7"} inspiration {"\u00B7"} discovery {"\u00B7"}{" "}
            </span>
          </motion.div>
        </div>

        {beats.map((beat, i) => (
          <Beat key={i} beat={beat} index={i} />
        ))}
      </div>
    </section>
  );
}
