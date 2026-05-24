"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Upload your wardrobe",
    body: "Your clothes, tagged and organised. Everything you own, finally visible.",
    reversed: false,
    imageSrc: "/images/how-it-works/step-01.png",
  },
  {
    number: "02",
    title: "Bridge the inspiration gap",
    body: "Connect your Pinterest boards. Weara matches what you saved to pieces you own \u2014 or sellers near you. No more saving outfits you can never recreate.",
    reversed: true,
    imageSrc: "/images/how-it-works/step-02.png",
  },
  {
    number: "03",
    title: "Meet your style avatar",
    body: "A virtual figure styled to your body, skin tone, and hair. See the outfit on you before you leave the house.",
    reversed: false,
    imageSrc: "/images/how-it-works/step-03.png",
  },
  {
    number: "04",
    title: "Discover sellers the algorithm hides",
    body: "Thrift pieces from Accra markets and African brand drops shown inside your outfit suggestion \u2014 not buried under accounts with bigger followings.",
    reversed: true,
    imageSrc: "/images/how-it-works/step-04.png",
  },
];

function Step({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const image = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
      className={step.reversed ? "md:order-1" : "md:order-2"}
    >
      <div
        className="w-full overflow-hidden"
        style={{
          position: "relative",
          aspectRatio: "4/5",
          maxWidth: "420px",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "16px",
          border: "1px solid rgba(250,247,242,0.06)",
        }}
      >
        <Image src={step.imageSrc} alt="" fill sizes="(max-width: 768px) 100vw, 420px" style={{ objectFit: "cover" }} />
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
      <span
        className="font-sans tracking-[0.2em] text-red opacity-70 mb-4 block"
        style={{ fontSize: "12px" }}
      >
        {step.number}
      </span>
      <h3
        className="text-warm max-w-lg"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(28px, 3vw, 48px)",
          fontWeight: 400,
          lineHeight: 1.1,
        }}
      >
        {step.title}
      </h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        className="font-sans text-muted mt-4"
        style={{
          fontSize: "clamp(15px, 1.3vw, 18px)",
          lineHeight: 1.7,
          maxWidth: "28rem",
        }}
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
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 py-16 md:py-20 border-t border-warm/[0.08]"
    >
      {image}
      {content}
    </div>
  );
}

export default function HowItWorks() {
  const openerRef = useRef(null);
  const openerInView = useInView(openerRef, { once: true });

  return (
    <section className="bg-ink py-24 md:py-32">
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
              className="text-warm italic"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              What if getting dressed felt like this?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={openerInView ? { opacity: 0.6 } : {}}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="hidden md:block text-right"
            >
              <span
                className="font-sans text-muted opacity-60 uppercase block"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.2em",
                  lineHeight: 2,
                }}
              >
                Upload.
              </span>
              <span
                className="font-sans text-muted opacity-60 uppercase block"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.2em",
                  lineHeight: 2,
                }}
              >
                Style.
              </span>
              <span
                className="font-sans text-muted opacity-60 uppercase block"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.2em",
                  lineHeight: 2,
                }}
              >
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
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted opacity-20 inline-block pr-4">
              upload {"\u00B7"} style {"\u00B7"} discover {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted opacity-20 inline-block pr-4">
              upload {"\u00B7"} style {"\u00B7"} discover {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted opacity-20 inline-block pr-4">
              upload {"\u00B7"} style {"\u00B7"} discover {"\u00B7"}{" "}
            </span>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted opacity-20 inline-block pr-4">
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
