"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Upload your wardrobe",
    body: "Your clothes, tagged and organised. Everything you own, finally visible.",
    reversed: false,
  },
  {
    number: "02",
    title: "Bridge the inspiration gap",
    body: "Connect your Pinterest boards. Weara matches what you saved to pieces you own \u2014 or sellers near you. No more saving outfits you can never recreate.",
    reversed: true,
  },
  {
    number: "03",
    title: "Meet your style avatar",
    body: "A virtual figure styled to your body, skin tone, and hair. See the outfit on you before you leave the house.",
    reversed: false,
  },
  {
    number: "04",
    title: "Discover sellers the algorithm hides",
    body: "Thrift pieces from Accra markets and African brand drops shown inside your outfit suggestion \u2014 not buried under accounts with bigger followings.",
    reversed: true,
  },
];

function Step({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const image = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
      className={step.reversed ? "md:order-1" : "md:order-2"}
    >
      <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-[#1e2030] rounded-2xl border border-ghost border-opacity-[0.05] hover:border-opacity-20 transition-all duration-500 flex items-center justify-center overflow-hidden relative">
        <span className="font-sans text-xs tracking-widest uppercase text-cadet opacity-20">
          Visual coming soon
        </span>
      </div>
    </motion.div>
  );

  const content = (
    <motion.div
      initial={{ opacity: 0, x: step.reversed ? 16 : -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={step.reversed ? "md:order-2" : "md:order-1"}
    >
      <span className="font-sans text-xs tracking-widest text-red opacity-70 mb-4 block">
        {step.number}
      </span>
      <h3 className="font-serif text-4xl md:text-6xl text-ghost leading-tight max-w-lg">
        {step.title}
      </h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        className="font-sans text-base md:text-lg text-cadet leading-relaxed max-w-sm mt-4"
      >
        {step.body}
      </motion.p>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: 48 } : {}}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="h-px bg-red mt-6"
      />
    </motion.div>
  );

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 py-16 md:py-20 border-t border-ghost border-opacity-[0.08]">
      {image}
      {content}
    </div>
  );
}

export default function HowItWorks() {
  const openerRef = useRef(null);
  const openerInView = useInView(openerRef, { once: true });

  return (
    <section className="bg-[#2B2D42] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div ref={openerRef} className="mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={openerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-sans text-xs tracking-[0.2em] uppercase text-red mb-10 block"
          >
            HOW IT WORKS
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-end gap-8 mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={openerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="font-serif italic text-4xl md:text-6xl text-ghost leading-tight"
            >
              What if getting dressed felt like this?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={openerInView ? { opacity: 0.6 } : {}}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="hidden md:block text-right"
            >
              <span className="font-sans text-sm tracking-[0.15em] uppercase text-cadet opacity-60 leading-loose block">
                Upload.
              </span>
              <span className="font-sans text-sm tracking-[0.15em] uppercase text-cadet opacity-60 leading-loose block">
                Style.
              </span>
              <span className="font-sans text-sm tracking-[0.15em] uppercase text-cadet opacity-60 leading-loose block">
                Discover.
              </span>
            </motion.div>
          </div>

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
              upload {"\u00B7"} style {"\u00B7"} discover {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-cadet opacity-20 inline-block pr-4">
              upload {"\u00B7"} style {"\u00B7"} discover {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-cadet opacity-20 inline-block pr-4">
              upload {"\u00B7"} style {"\u00B7"} discover {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-cadet opacity-20 inline-block pr-4">
              upload {"\u00B7"} style {"\u00B7"} discover {"\u00B7"}{" "}
            </span>
          </motion.div>
        </div>

        {steps.map((step, i) => (
          <Step key={i} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
