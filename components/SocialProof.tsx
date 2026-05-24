"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function CountUp({ to, delay }: { to: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span
      ref={ref}
      className="font-serif text-red leading-none"
      style={{
        fontSize: "clamp(52px, 6vw, 88px)",
        fontWeight: 400,
      }}
    >
      {isInView ? to : "0"}
    </span>
  );
}

function StatCard({
  number,
  label,
  note,
  delay,
}: {
  number: string;
  label: string;
  note: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="px-0 py-8 md:px-12 md:py-0 first:pl-0 last:pr-0"
    >
      <CountUp to={number} delay={delay} />
      <p
        className="font-sans text-[#4A4A5A] mt-3 max-w-[180px]"
        style={{
          fontSize: "clamp(13px, 1.1vw, 16px)",
          lineHeight: 1.6,
        }}
      >
        {label}
      </p>
      <p
        className="font-sans text-[#4A4A5A] mt-2"
        style={{
          fontSize: "clamp(13px, 1.1vw, 16px)",
          lineHeight: 1.6,
        }}
      >
        {note}
      </p>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-[#E8E0D5] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-sans text-red mb-6 block text-xs uppercase tracking-[0.2em]"
        >
          EARLY INSIGHTS
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-ink"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(52px, 7vw, 100px)",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          300 pieces.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-ink"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(52px, 7vw, 100px)",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Same 30 outfits.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-ink/45 mt-6 italic leading-none"
          style={{
            fontSize: "clamp(24px, 2.5vw, 36px)",
          }}
        >
          We see the problem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="bg-red mt-8 h-px w-16 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-ink/45 mt-4 mb-16 text-xs tracking-wide"
        >
          Insights from Stage 0 interviews — May 2026.
          <br />
          Names used with permission or anonymised by request.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 divide-y divide-ink/[0.08] border-y border-ink/[0.08] py-12 md:grid-cols-3 md:divide-y-0 md:divide-x mb-16"
        >
          <StatCard
            number="30%"
            label="of her wardrobe gets worn regularly."
            note="She owns hundreds of pieces."
            delay={0}
          />
          <StatCard
            number="20 min"
            label="lost every morning to outfit decisions."
            note="Even on simple days."
            delay={0.1}
          />
          <StatCard
            number="100%"
            label="felt frustrated dressing for a special event."
            note="Despite having a full wardrobe."
            delay={0.2}
          />
        </motion.div>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "21/9",
            borderRadius: "16px",
            overflow: "hidden",
            marginTop: "48px",
            marginBottom: "48px",
          }}
        >
          <Image
            src="/images/social-proof/atmosphere.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 40%, #E8E0D5 100%)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border-t border-ink/[0.08] pt-12 pb-12"
        >
          <span className="font-serif text-red text-6xl leading-none opacity-60 md:text-8xl block mb-[-1rem]">
            &ldquo;
          </span>
          <p
            className="font-serif text-ink/80 max-w-3xl"
            style={{
              fontSize: "clamp(20px, 2.2vw, 34px)",
              lineHeight: 1.5,
            }}
          >
            Pinterest is great for inspiration,
            <br />
            but it&rsquo;s frustrating when I can&rsquo;t find the clothes
            <br />
            in my own closet or at the local market.
            <br />
            I want to wear the look, not just save the photo.
          </p>
          <p className="font-sans text-[#6B6B7E] mt-6 text-xs uppercase tracking-[0.15em]">
            &mdash; Owusuwa, Identity-Led Shopper
          </p>
        </motion.div>

        <div className="grid grid-cols-1 divide-y divide-ink/[0.08] border-t border-ink/[0.08] md:grid-cols-2 md:divide-y-0 md:divide-x">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="pt-12 pb-12 md:pr-12"
          >
            <span className="font-serif text-red text-4xl leading-none opacity-60 md:text-5xl block mb-[-0.75rem]">
              &ldquo;
            </span>
            <p
              className="font-serif text-ink/80"
              style={{
                fontSize: "clamp(17px, 1.8vw, 26px)",
                lineHeight: 1.5,
              }}
            >
              I own over 300 pieces of clothing,
              <br />
              but I wear the same 30% over and over.
              <br />
              I need a way to see what I actually have.
            </p>
            <p className="font-sans text-[#6B6B7E] mt-6 text-xs uppercase tracking-[0.15em]">
              &mdash; Rayyanah, Wardrobe Power-User
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="pt-12 pb-12 md:pl-12"
          >
            <span className="font-serif text-red text-4xl leading-none opacity-60 md:text-5xl block mb-[-0.75rem]">
              &ldquo;
            </span>
            <p
              className="font-serif text-ink/80"
              style={{
                fontSize: "clamp(17px, 1.8vw, 26px)",
                lineHeight: 1.5,
              }}
            >
              I spent weeks planning what to wear
              <br />
              for my pitch and still couldn&rsquo;t find
              <br />
              the right pieces. Event dressing
              <br />
              shouldn&rsquo;t be this hard.
            </p>
            <p className="font-sans text-[#6B6B7E] mt-6 text-xs uppercase tracking-[0.15em]">
              &mdash; Anna, Creative Professional
            </p>
          </motion.div>
        </div>

        <div className="border-t border-ink/[0.08] pt-12 mt-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-ink/45 mb-6 text-xs uppercase tracking-[0.2em]"
          >
            MORE FROM OUR EARLY CONVERSATIONS
          </motion.p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="font-serif text-ink/60"
              style={{
                fontSize: "clamp(17px, 1.8vw, 26px)",
                lineHeight: 1.5,
              }}
            >
              &ldquo;If I could find pieces from local markets
              <br />
              and African brands in one place,
              <br />
              I&rsquo;d never look anywhere else.&rdquo;
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              className="font-serif text-ink/60"
              style={{
                fontSize: "clamp(17px, 1.8vw, 26px)",
                lineHeight: 1.5,
              }}
            >
              &ldquo;I only shop where I can see the reviews.
              <br />
              Weara brings that trust to the thrift market.&rdquo;
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
