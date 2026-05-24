"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ to, delay }: { to: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span
      ref={ref}
      className="font-serif text-red text-6xl leading-none md:text-7xl"
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
      <p className="font-sans text-cadet mt-3 max-w-[180px] text-sm leading-relaxed">
        {label}
      </p>
      <p className="font-sans text-cadet/40 mt-2 text-xs">{note}</p>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-[#1e2030] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* SECTION OPENER */}
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
          className="font-serif text-ghost text-6xl leading-none md:text-8xl"
        >
          300 pieces.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-ghost text-6xl leading-none md:text-8xl"
        >
          Same 30 outfits.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-ghost/50 mt-6 text-3xl italic leading-none md:text-4xl"
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
          className="font-sans text-cadet/40 mt-4 mb-16 text-xs tracking-wide"
        >
          Insights from Stage 0 interviews — May 2026.
          <br />
          Names used with permission or anonymised by request.
        </motion.p>

        {/* THREE STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 divide-y divide-ghost/10 border-y border-ghost/10 py-12 md:grid-cols-3 md:divide-y-0 md:divide-x mb-16"
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

        {/* QUOTE 1 — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border-t border-ghost/10 pt-12 pb-12"
        >
          <span className="font-serif text-red text-6xl leading-none opacity-60 md:text-8xl block mb-[-1rem]">
            &ldquo;
          </span>
          <p className="font-serif text-ghost/90 max-w-3xl text-2xl leading-[1.4] md:text-4xl">
            Pinterest is great for inspiration,
            <br />
            but it&rsquo;s frustrating when I can&rsquo;t find the clothes
            <br />
            in my own closet or at the local market.
            <br />
            I want to wear the look, not just save the photo.
          </p>
          <p className="font-sans text-cadet/60 mt-6 text-xs uppercase tracking-[0.15em]">
            &mdash; Owusuwa, Identity-Led Shopper
          </p>
        </motion.div>

        {/* QUOTES 2 + 3 — two columns */}
        <div className="grid grid-cols-1 divide-y divide-ghost/10 border-t border-ghost/10 md:grid-cols-2 md:divide-y-0 md:divide-x">
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
            <p className="font-serif text-ghost/80 text-xl leading-[1.4] md:text-2xl">
              I own over 300 pieces of clothing,
              <br />
              but I wear the same 30% over and over.
              <br />
              I need a way to see what I actually have.
            </p>
            <p className="font-sans text-cadet/60 mt-6 text-xs uppercase tracking-[0.15em]">
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
            <p className="font-serif text-ghost/80 text-xl leading-[1.4] md:text-2xl">
              I spent weeks planning what to wear
              <br />
              for my pitch and still couldn&rsquo;t find
              <br />
              the right pieces. Event dressing
              <br />
              shouldn&rsquo;t be this hard.
            </p>
            <p className="font-sans text-cadet/60 mt-6 text-xs uppercase tracking-[0.15em]">
              &mdash; Anna, Creative Professional
            </p>
          </motion.div>
        </div>

        {/* BOTTOM TRUST LINE */}
        <div className="border-t border-ghost/10 pt-12 mt-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-cadet/40 mb-6 text-xs uppercase tracking-[0.2em]"
          >
            MORE FROM OUR EARLY CONVERSATIONS
          </motion.p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="font-serif text-ghost/60 text-lg leading-[1.4] md:text-xl"
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
              className="font-serif text-ghost/60 text-lg leading-[1.4] md:text-xl"
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
