"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const thriftPromises = [
  "We photograph and list your pieces for you",
  "Your storefront never disappears after 24 hours",
  "Customers find you by taste, not follower count",
  "Get paid via MoMo the same day something sells",
];

const brandPromises = [
  "Your pieces inside real women\u2019s outfit suggestions",
  "In front of women who already love your aesthetic",
  "Discovery by taste, not algorithm reach",
  "No ads. No monthly fees. Pay only when you sell.",
];

const promiseItem = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

function PromiseList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <motion.p
          key={i}
          custom={i}
          variants={promiseItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-sans text-muted flex items-center gap-3"
          style={{
            fontSize: "clamp(14px, 1.2vw, 17px)",
            lineHeight: 1.8,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red shrink-0" />
          {item}
        </motion.p>
      ))}
    </div>
  );
}

export default function SellerSection() {
  const openerRef = useRef(null);
  const openerInView = useInView(openerRef, { once: true });

  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-10%" });

  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-10%" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true });

  const handleSellerCTA = () => {
    sessionStorage.setItem("joinAs", "seller");
    const waitlist = document.getElementById("waitlist");
    if (waitlist) {
      waitlist.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="bg-ink-mid py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div ref={openerRef}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={openerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-sans text-xs tracking-[0.2em] uppercase text-red mb-6 block"
          >
            FOR SELLERS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={openerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-warm leading-none"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(44px, 5.5vw, 80px)",
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            Your best pieces deserve
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={openerInView ? { opacity: 0.4, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="text-warm opacity-40 leading-none"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(44px, 5.5vw, 80px)",
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            more than 24 hours.
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={openerInView ? { width: 64 } : {}}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="h-px bg-red mt-8 mb-0"
          />

          <div className="h-8 overflow-hidden relative mt-6 mb-16">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex whitespace-nowrap absolute"
            >
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted opacity-20 inline-block pr-4">
                persistent {"\u00B7"} visible {"\u00B7"} paid {"\u00B7"}{" "}
              </span>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted opacity-20 inline-block pr-4">
                persistent {"\u00B7"} visible {"\u00B7"} paid {"\u00B7"}{" "}
              </span>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted opacity-20 inline-block pr-4">
                persistent {"\u00B7"} visible {"\u00B7"} paid {"\u00B7"}{" "}
              </span>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted opacity-20 inline-block pr-4">
                persistent {"\u00B7"} visible {"\u00B7"} paid {"\u00B7"}{" "}
              </span>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-warm/[0.08]">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -16 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pt-16 pb-12 md:pr-16 border-b md:border-b-0 md:border-r border-warm/[0.08]"
          >
            <span
              className="font-sans text-muted opacity-50 uppercase mb-8 block"
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
            >
              FOR THRIFT SELLERS
            </span>

            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "24px",
              }}
            >
              <Image
                src="/images/sellers/thrift.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3
              className="text-warm max-w-sm mb-8"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(24px, 2.5vw, 38px)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              You post. It disappears.
              <br />
              The customer who would have bought it never saw it.
            </h3>

            <PromiseList items={thriftPromises} />

            <motion.div
              initial={{ width: 0 }}
              animate={leftInView ? { width: 48 } : {}}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              className="h-px bg-red mt-8"
            />
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 16 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="pt-16 pb-12 md:pl-16"
          >
            <span
              className="font-sans text-muted opacity-50 uppercase mb-8 block"
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
            >
              FOR AFRICAN FASHION BRANDS
            </span>

            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "24px",
              }}
            >
              <Image
                src="/images/sellers/brand.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3
              className="text-warm max-w-sm mb-8"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(24px, 2.5vw, 38px)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              You have the inventory.
              <br />
              You have the aesthetic.
              <br />
            </h3>

            <PromiseList items={brandPromises} />

            <motion.div
              initial={{ width: 0 }}
              animate={rightInView ? { width: 48 } : {}}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              className="h-px bg-red mt-8"
            />
          </motion.div>
        </div>

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="border-t border-warm/[0.08] mt-16 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <p
            className="font-serif italic text-warm opacity-70 max-w-sm"
            style={{ fontSize: "clamp(20px, 2vw, 28px)" }}
          >
            Ready to reach the women already looking for what you sell?
          </p>
          <button
            onClick={handleSellerCTA}
            className="bg-red hover:bg-crimson text-warm font-sans font-semibold text-base px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shrink-0 w-full md:w-auto cursor-pointer"
          >
            List your pieces {"\u2192"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
