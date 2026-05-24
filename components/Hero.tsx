"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    label: "LOOK 01",
    labelSize: "48px",
    item: "Vintage wrap dress",
    price: "\u00B585",
    topColor: "#3D2B3D",
    width: "140px",
    style: { top: "8%", left: "3%" },
    rotate: -8,
    delay: 0.4,
    floatY: [0, -10, 0],
    floatDur: 5,
    showMobile: true,
  },
  {
    id: 2,
    label: "LOOK 02",
    labelSize: "48px",
    item: "Ankara two-piece",
    price: "\u00B5120",
    topColor: "#2B3D3D",
    width: "120px",
    style: { top: "6%", right: "4%" },
    rotate: 7,
    delay: 0.52,
    floatY: [0, 10, 0],
    floatDur: 6,
    showMobile: true,
  },
  {
    id: 3,
    label: "LOOK 03",
    labelSize: "40px",
    item: "Thrifted blazer",
    price: "\u00B545",
    topColor: "#3D3020",
    width: "160px",
    style: { top: "52%", left: "1%" },
    rotate: 5,
    delay: 0.64,
    floatY: [0, -10, 0],
    floatDur: 4.5,
    showMobile: true,
  },
  {
    id: 4,
    label: "LOOK 04",
    labelSize: "44px",
    item: "Printed midi",
    price: "\u00B5200",
    topColor: "#20283D",
    width: "130px",
    style: { bottom: "12%", left: "18%" },
    rotate: -4,
    delay: 0.76,
    floatY: [0, 10, 0],
    floatDur: 5.5,
    showMobile: false,
  },
  {
    id: 5,
    label: "LOOK 05",
    labelSize: "40px",
    item: "Silk cami",
    price: "\u00B560",
    topColor: "#3D2535",
    width: "110px",
    style: { top: "18%", right: "2%" },
    rotate: -7,
    delay: 0.88,
    floatY: [0, -10, 0],
    floatDur: 7,
    showMobile: false,
  },
  {
    id: 6,
    label: "LOOK 06",
    labelSize: "44px",
    item: "Aso-oke detail",
    price: "\u00B5350",
    topColor: "#253D2B",
    width: "150px",
    style: { bottom: "6%", right: "6%" },
    rotate: 9,
    delay: 1.0,
    floatY: [0, 10, 0],
    floatDur: 4,
    showMobile: true,
  },
  {
    id: 7,
    label: "LOOK 07",
    labelSize: "36px",
    item: "Kente wrap",
    price: "\u00B5180",
    topColor: "#3D2B20",
    width: "100px",
    style: { top: "35%", left: "5%" },
    rotate: 12,
    delay: 1.12,
    floatY: [0, -10, 0],
    floatDur: 6.5,
    showMobile: false,
  },
  {
    id: 8,
    label: "LOOK 08",
    labelSize: "36px",
    item: "Beaded top",
    price: "\u00B595",
    topColor: "#2B2040",
    width: "115px",
    style: { top: "30%", right: "5%" },
    rotate: -5,
    delay: 1.24,
    floatY: [0, 10, 0],
    floatDur: 5.2,
    showMobile: false,
  },
];

const headlineWords = "Dress with intention.".split(" ");

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#212130" }}
    >
      <div
        className="pointer-events-none absolute z-0"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(239,35,60,0.06) 0%, transparent 70%)",
          top: "-10%",
          left: "-5%",
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(61,61,85,0.8) 0%, transparent 70%)",
          bottom: "-10%",
          right: "-5%",
        }}
      />

      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 60, rotate: card.rotate }}
          animate={{ opacity: 1, y: 0, rotate: card.rotate }}
          transition={{
            delay: card.delay,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
          className={`absolute z-[5] cursor-default ${card.showMobile ? "" : "hidden md:block"}`}
          style={{
            width: `clamp(80px, ${card.width}, ${card.width})`,
            ...card.style,
          }}
        >
          <motion.div
            animate={{ y: card.floatY }}
            transition={{
              duration: card.floatDur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="relative flex aspect-[3/4] items-center justify-center overflow-hidden"
              style={{ backgroundColor: card.topColor }}
            >
              <span
                className="font-serif select-none"
                style={{
                  fontSize: `clamp(28px, ${card.labelSize}, ${card.labelSize})`,
                  color: "rgba(255,255,255,0.15)",
                  letterSpacing: "0.05em",
                }}
              >
                {card.label}
              </span>
            </div>

            <div
              style={{
                backgroundColor: "#1A1A28",
                padding: "10px 12px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="font-sans"
                style={{
                  fontSize: "11px",
                  color: "#FAF7F2",
                  fontWeight: 500,
                  marginBottom: "2px",
                }}
              >
                {card.item}
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "10px", color: "#8D8FA8" }}
              >
                {card.price}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{ pointerEvents: "auto" }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-sans"
          style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#EF233C",
            marginBottom: "24px",
          }}
        >
          COMING SOON TO ACCRA
        </motion.span>

        <h1
          className="font-serif mb-5"
          style={{
            fontSize: "clamp(56px, 9vw, 120px)",
            color: "#FAF7F2",
            lineHeight: 1,
            fontWeight: 400,
          }}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
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
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="font-sans"
          style={{
            fontSize: "clamp(17px, 1.6vw, 22px)",
            color: "#8D8FA8",
            lineHeight: 1.6,
            maxWidth: "420px",
            marginBottom: "40px",
          }}
        >
          Discover outfits from your wardrobe
          <br />
          and the fashion around you.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.85, duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.03, backgroundColor: "#D90429" }}
          whileTap={{ scale: 0.97 }}
          className="font-sans w-full cursor-pointer border-none font-semibold"
          style={{
            backgroundColor: "#EF233C",
            color: "#FAF7F2",
            padding: "16px 40px",
            borderRadius: "100px",
            fontSize: "16px",
            letterSpacing: "0.03em",
            maxWidth: "280px",
            transition: "background-color 0.2s",
          }}
        >
          Join the waitlist {"\u2192"}
        </motion.button>
      </div>
    </section>
  );
}
