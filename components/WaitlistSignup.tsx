"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const roles = [
  { value: "shopper", label: "Shopper" },
  { value: "brand", label: "Fashion Brand" },
  { value: "thrift", label: "Thrift Seller" },
  { value: "boutique", label: "Boutique" },
];

const proofCards = [
  {
    tag: "SHOPPER",
    text: "\u201CI save outfits constantly and never recreate them.\u201D",
  },
  {
    tag: "RETURNEE",
    text: "\u201CI\u2019ve wanted something like this since moving home.\u201D",
  },
  {
    tag: "SELLER",
    text: "\u201CMy clothes deserve more than disappearing stories.\u201D",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function WaitlistSignup() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <section className="bg-[#2B2D42] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl text-ghost leading-[0.95] tracking-tight mb-6"
            >
              Dress differently.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="font-sans text-base md:text-lg text-cadet max-w-xl leading-relaxed mb-10"
            >
              Launching first in Accra.
              <br />
              Join early access to discover fashion, style your wardrobe, and help shape Weara.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="font-sans text-xs tracking-widest text-cadet opacity-60 uppercase mb-4">
              Who are you?
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {roles.map((role) => (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`font-sans text-sm px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    selectedRole === role.value
                      ? "border-red text-ghost bg-red/10"
                      : "border-cadet/30 text-cadet hover:border-cadet/60 hover:text-ghost"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-cadet/30 focus:border-ghost text-ghost font-sans text-sm px-5 py-3 rounded-full outline-none transition-colors placeholder:text-cadet/40"
              />
              <button className="bg-red hover:bg-crimson text-ghost font-sans font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shrink-0">
                Join Early Access {"\u2192"}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proofCards.map((card, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="border border-ghost/10 rounded-xl p-5 transition-all duration-200"
                >
                  <span className="font-sans text-xs tracking-widest text-red uppercase mb-2 block">
                    {card.tag}
                  </span>
                  <p className="font-sans text-sm text-cadet leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-2"
          >
            <span className="font-sans text-xs tracking-widest uppercase text-cadet/50">
              Launching in Accra first
            </span>
            <span className="font-sans text-xs tracking-widest uppercase text-cadet/50">
              Limited onboarding
            </span>
            <span className="font-sans text-xs tracking-widest uppercase text-cadet/50">
              Early members shape features
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
