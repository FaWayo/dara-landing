"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  {
    Q: "Is this free for buyers?",
    A: "Yes. Always.\nWeara is free for every woman who uses it.\nThe platform earns from sellers \u2014 never from buyers.",
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
    Q: "Where is Weara launching first?",
    A: "Accra, Ghana. Then Lagos.\nIf you're on the waitlist, you hear first \u2014\nand we reach out personally.",
  },
  {
    Q: "When does it launch?",
    A: "Soon. We're in the final stages of validation\nbefore we open to our first users.\nJoin the waitlist and you will be among the first\nto know \u2014 and the first to get in.",
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
    <section className="bg-[#1e2030] py-24 md:py-32">
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
          className="font-serif text-ghost text-5xl leading-none md:text-7xl"
        >
          Good questions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-ghost/40 text-5xl leading-none md:text-7xl"
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
          className="border-t border-ghost/[0.08]"
        >
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border-b border-ghost/[0.08]"
              >
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full cursor-pointer items-center justify-between py-6 text-left"
                >
                  <span className="font-serif text-ghost text-xl transition-opacity duration-200 group-hover:opacity-70 md:text-2xl">
                    {item.Q}
                  </span>
                  <span className="font-sans text-cadet text-2xl font-light transition-transform duration-300">
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
                      <p className="font-sans text-cadet max-w-2xl pb-6 pt-2 text-base leading-relaxed md:text-lg">
                        {item.A}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="border-t border-ghost/[0.08] pt-12 mt-8">
          <p className="font-serif text-ghost/50 text-xl italic md:text-2xl">
            Still have questions?
          </p>
          <a
            href="mailto:hello@weara.co"
            className="font-sans text-cadet hover:text-ghost mt-2 inline-block text-sm tracking-wide underline underline-offset-4 transition-colors duration-200"
          >
            hello@weara.co
          </a>
        </div>
      </div>
    </section>
  );
}
