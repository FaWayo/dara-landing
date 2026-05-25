"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  {
    Q: "Is this free for buyers?",
    A: "Yes. Always.\nDara is free for every woman who uses it.\nThe platform earns from sellers \u2014 never from buyers.",
  },
  {
    Q: "How do sellers get paid?",
    A: "Mobile money. MoMo, Telecel Cash, or bank transfer.\nWithin 48 hours of a confirmed sale.\nNo waiting. No paperwork.",
  },
  {
    Q: "Do I need to photograph and list my own items?",
    A: "No. For thrift sellers, we come to you.\nWe photograph your pieces and list them ourselves.\nYou focus on sourcing. We handle the storefront.",
  },
  {
    Q: "Where is Dara launching first?",
    A: "We are starting small and intentional.\nJoin the waitlist and you will be among the first to know.",
  },
  {
    Q: "When does Dara launch?",
    A: "Soon. Join the waitlist and you will hear first \u2014 we reach out personally to everyone on the list.",
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-sans text-red mb-6 block text-xs uppercase tracking-[0.2em]"
        >
          FAQ
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-warm"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(44px, 5.5vw, 80px)",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Good questions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-warm/40"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(44px, 5.5vw, 80px)",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          deserve honest answers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="bg-red mt-8 mb-16 h-px w-16 origin-left"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="border-t border-warm/[0.08]"
        >
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border-b border-warm/[0.08]"
              >
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full cursor-pointer items-center justify-between py-6 text-left"
                >
                  <span
                    className={`transition-all duration-200 ${
                      isOpen ? "text-warm" : "text-warm/60 group-hover:text-warm/80"
                    }`}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(18px, 1.8vw, 26px)",
                      fontWeight: 400,
                    }}
                  >
                    {item.Q}
                  </span>
                  <span className="font-sans text-muted text-2xl font-light transition-transform duration-300">
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="font-sans text-muted max-w-2xl pb-6 pt-2"
                        style={{
                          fontSize: "clamp(15px, 1.3vw, 18px)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.A}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="border-t border-warm/[0.08] pt-12 mt-8">
          <p
            className="text-warm/50 italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 2vw, 28px)",
            }}
          >
            Still have questions?
          </p>
          <a
            href="mailto:fatimah.wayo@meltwater.org?cc=roddiyyat.nasirudeen@meltwater.org"
            className="font-sans text-muted hover:text-warm mt-2 inline-block text-sm tracking-wide underline underline-offset-4 transition-colors duration-200"
          >
            fatimah.wayo@meltwater.org
          </a>
          <span className="font-sans text-muted/40 mx-2 text-sm" aria-hidden="true">/</span>
          <a
            href="mailto:fatimah.wayo@meltwater.org?cc=roddiyyat.nasirudeen@meltwater.org"
            className="font-sans text-muted hover:text-warm inline-block text-sm tracking-wide underline underline-offset-4 transition-colors duration-200"
          >
            roddiyyat.nasirudeen@meltwater.org
          </a>
        </div>
      </div>
    </section>
  );
}
