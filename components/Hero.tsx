"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    label: "LOOK 01",
    name: "Vintage wrap dress",
    price: "\u00B585",
    size: "w-36 md:w-44",
    style: { top: "10%", left: "4%" },
    rotate: -8,
    delay: 0.5,
    duration: 0.9,
    floatY: [0, -8, 0],
    floatDur: 5,
    hideMobile: false,
  },
  {
    id: 2,
    label: "LOOK 02",
    name: "Ankara set",
    price: "\u00B5120",
    size: "w-28 md:w-36",
    style: { top: "5%", right: "6%" },
    rotate: 6,
    delay: 0.65,
    duration: 1.0,
    floatY: [0, 8, 0],
    floatDur: 4.5,
    hideMobile: false,
  },
  {
    id: 3,
    label: "LOOK 03",
    name: "Thrifted blazer",
    price: "\u00B545",
    size: "w-40 md:w-48",
    style: { top: "55%", left: "2%" },
    rotate: 5,
    delay: 0.8,
    duration: 1.1,
    floatY: [0, -8, 0],
    floatDur: 6,
    hideMobile: false,
  },
  {
    id: 4,
    label: "LOOK 04",
    name: "Printed midi",
    price: "\u00B5200",
    size: "w-32 md:w-40",
    style: { bottom: "10%", left: "20%" },
    rotate: -4,
    delay: 0.95,
    duration: 0.85,
    floatY: [0, 8, 0],
    floatDur: 5.5,
    hideMobile: false,
  },
  {
    id: 5,
    label: "LOOK 05",
    name: "Silk cami",
    price: "\u00B560",
    size: "w-28 md:w-36",
    style: { top: "20%", right: "3%" },
    rotate: -6,
    delay: 1.1,
    duration: 1.2,
    floatY: [0, -8, 0],
    floatDur: 4,
    hideMobile: true,
  },
  {
    id: 6,
    label: "LOOK 06",
    name: "Aso-oke detail",
    price: "\u00B5350",
    size: "w-36 md:w-44",
    style: { bottom: "8%", right: "8%" },
    rotate: 8,
    delay: 1.25,
    duration: 0.95,
    floatY: [0, 8, 0],
    floatDur: 5.2,
    hideMobile: true,
  },
];

const headlineWords = "Dress with intention.".split(" ");

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2B2D42] overflow-hidden">
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(239,35,60,0.04) 0%, transparent 70%)",
        }}
      />

      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ y: 40, rotate: card.rotate }}
          animate={{ y: 0, rotate: card.rotate }}
          transition={{
            delay: card.delay,
            duration: card.duration,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`absolute z-0 opacity-40 md:opacity-100 ${card.size} ${card.hideMobile ? "hidden md:block" : "block"}`}
          style={card.style}
        >
          <motion.div
            animate={{ y: card.floatY }}
            transition={{
              duration: card.floatDur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full"
          >
            <div className="w-full aspect-[3/4] bg-[#1e2030] rounded-t-xl flex flex-col items-center justify-center relative">
              <span className="font-sans text-xs text-cadet opacity-40 tracking-widest uppercase">
                {card.label}
              </span>
              <div className="absolute bottom-0 w-full h-px bg-red opacity-30" />
            </div>
            <div className="bg-[#12131f] rounded-b-xl px-3 py-2 flex items-center justify-between">
              <span className="font-sans text-xs text-ghost">{card.name}</span>
              <span className="font-sans text-xs text-cadet opacity-60">
                {card.price}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-red mb-8 opacity-80"
        >
          COMING SOON TO ACCRA
        </motion.span>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-ghost leading-none mb-6">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + i * 0.08,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="inline-block mr-[0.15em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
          className="font-sans text-lg md:text-xl text-cadet max-w-md leading-relaxed mb-10"
        >
          Discover outfits from your wardrobe
          <br />
          and the fashion around you.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-red hover:bg-crimson text-ghost font-sans font-semibold text-base rounded-full px-10 py-4 transition-colors duration-200 w-full max-w-xs mx-auto"
        >
          Join the waitlist {"\u2192"}
        </motion.button>
      </div>
    </section>
  );
}
