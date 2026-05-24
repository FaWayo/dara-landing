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
      <span className="font-sans text-xs tracking-widest text-red opacity-70 mb-4 block">
        {beat.number}
      </span>
      <motion.h3
        initial={{ opacity: 0, x: beat.reversed ? 16 : -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-serif text-4xl md:text-6xl text-ghost leading-tight max-w-lg"
      >
        {beat.statement}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        className="font-sans text-base md:text-lg text-cadet leading-relaxed max-w-sm mt-4"
      >
        {beat.support}
      </motion.p>
    </div>
  );

  const numberCol = (
    <div className="hidden md:block overflow-hidden pointer-events-none select-none">
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className={`font-serif text-[20vw] leading-none text-ghost opacity-[0.03] block ${beat.reversed ? "" : "text-right"}`}
      >
        {beat.number}
      </motion.span>
    </div>
  );

  const gridClass = beat.reversed
    ? "grid grid-cols-1 md:grid-cols-[auto_1fr] items-end gap-8 py-16 md:py-20 border-t border-ghost border-opacity-[0.08]"
    : "grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 py-16 md:py-20 border-t border-ghost border-opacity-[0.08]";

  return (
    <div ref={ref} className={gridClass}>
      {beat.reversed ? numberCol : content}
      {beat.reversed ? content : numberCol}
    </div>
  );
}

export default function BuyerProblem() {
  const openerRef = useRef(null);
  const openerInView = useInView(openerRef, { once: true });

  return (
    <section className="bg-[#1e2030] py-24 md:py-32">
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
            className="font-serif text-5xl md:text-7xl text-ghost leading-none max-w-2xl"
          >
            You have a full wardrobe.
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={openerInView ? { opacity: 0.4, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-ghost opacity-40 leading-none"
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
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-cadet opacity-20 inline-block pr-4">
              wardrobe {"\u00B7"} inspiration {"\u00B7"} discovery {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-cadet opacity-20 inline-block pr-4">
              wardrobe {"\u00B7"} inspiration {"\u00B7"} discovery {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-cadet opacity-20 inline-block pr-4">
              wardrobe {"\u00B7"} inspiration {"\u00B7"} discovery {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-cadet opacity-20 inline-block pr-4">
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
