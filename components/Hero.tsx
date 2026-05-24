"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    imageSrc: "/images/hero/wrapdress.png",
    label: "LOOK 01",
    labelSize: "48px",
    item: "Vintage wrap dress",
    price: "\u00B585",
    topColor: "#3D2B3D",
    width: "196px",
    mobileWidth: "118px",
    style: { top: "8%", left: "3%" },
    rotate: -8,
    delay: 0.4,
    floatDur: 5,
    showMobile: true,
  },
  {
    id: 2,
    imageSrc: "/images/hero/ankara.png",
    label: "LOOK 02",
    labelSize: "48px",
    item: "Ankara two-piece",
    price: "\u00B5120",
    topColor: "#2B3D3D",
    width: "168px",
    mobileWidth: "101px",
    style: { top: "6%", right: "4%" },
    rotate: 7,
    delay: 0.52,
    floatDur: 7,
    showMobile: true,
  },
  {
    id: 3,
    imageSrc: "/images/hero/blazer.png",
    label: "LOOK 03",
    labelSize: "40px",
    item: "Thrifted blazer",
    price: "\u00B545",
    topColor: "#3D3020",
    width: "224px",
    mobileWidth: "134px",
    style: { top: "52%", left: "1%" },
    rotate: 5,
    delay: 0.64,
    floatDur: 6,
    showMobile: true,
  },
  {
    id: 4,
    imageSrc: "/images/hero/midiskirt.png",
    label: "LOOK 04",
    labelSize: "44px",
    item: "Printed midi",
    price: "\u00B5200",
    topColor: "#20283D",
    width: "182px",
    mobileWidth: "109px",
    style: { bottom: "12%", left: "18%" },
    rotate: -4,
    delay: 0.76,
    floatDur: 8,
    showMobile: false,
  },
  {
    id: 5,
    imageSrc: "/images/hero/cami.png",
    label: "LOOK 05",
    labelSize: "40px",
    item: "Silk cami",
    price: "\u00B560",
    topColor: "#3D2535",
    width: "154px",
    mobileWidth: "92px",
    style: { top: "18%", right: "2%" },
    rotate: -7,
    delay: 0.88,
    floatDur: 7,
    showMobile: false,
  },
  {
    id: 6,
    imageSrc: "/images/hero/aseoki.png",
    label: "LOOK 06",
    labelSize: "44px",
    item: "Aso-oke detail",
    price: "\u00B5350",
    topColor: "#253D2B",
    width: "210px",
    mobileWidth: "126px",
    style: { bottom: "6%", right: "6%" },
    rotate: 9,
    delay: 1.0,
    floatDur: 6,
    showMobile: true,
  },
  {
    id: 7,
    imageSrc: "/images/hero/kente.png",
    label: "LOOK 07",
    labelSize: "36px",
    item: "Kente wrap",
    price: "\u00B5180",
    topColor: "#3D2B20",
    width: "140px",
    mobileWidth: "84px",
    style: { top: "35%", left: "5%" },
    rotate: 12,
    delay: 1.12,
    floatDur: 8,
    showMobile: false,
  },
  {
    id: 8,
    imageSrc: "/images/hero/beadtop.png",
    label: "LOOK 08",
    labelSize: "36px",
    item: "Beaded top",
    price: "\u00B595",
    topColor: "#2B2040",
    width: "161px",
    mobileWidth: "97px",
    style: { top: "30%", right: "5%" },
    rotate: -5,
    delay: 1.24,
    floatDur: 9,
    showMobile: false,
  },
];

const headlineWords = "Dress with intention.".split(" ");

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{
          position: "absolute",
          inset: "-5%",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,15,25,0.88) 0%, rgba(15,15,25,0.60) 45%, rgba(15,15,25,0.75) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(15,15,25,0.7) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </motion.div>

      {cards.map((card, index) => {
        const isOdd = card.id % 2 !== 0;
        const floatY = isOdd ? [0, -14, 0] : [0, 14, 0];
        const floatRotate = isOdd
          ? [card.rotate, card.rotate - 1, card.rotate]
          : [card.rotate, card.rotate + 1, card.rotate];

        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 60, rotate: card.rotate }}
            animate={{ opacity: 1, y: 0, rotate: card.rotate }}
            transition={{
              delay: card.delay,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.3 },
            }}
            className={`absolute z-[5] cursor-default ${card.showMobile ? "" : "hidden md:block"}`}
            style={{
              width: `clamp(${card.mobileWidth}, ${card.width}, ${card.width})`,
              ...card.style,
            }}
          >
            <motion.div
              animate={{
                y: floatY,
                rotate: floatRotate,
              }}
              transition={{
                duration: card.floatDur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.8,
              }}
              className="w-full"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={card.imageSrc}
                  alt={card.item}
                  fill
                  sizes="(max-width: 768px) 130px, 200px"
                  loading="eager"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(26,26,40,0.8) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{ pointerEvents: "auto" }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
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
            color: "#FFFFFF",
            lineHeight: 1,
            fontWeight: 400,
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
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
            color: "#FAF7F2",
            opacity: 0.9,
            lineHeight: 1.6,
            maxWidth: "420px",
            marginBottom: "40px",
            textShadow: "0 1px 8px rgba(0,0,0,0.4)",
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
          onClick={() =>
            document
              .getElementById("waitlist")
              ?.scrollIntoView({ behavior: "smooth" })
          }
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
