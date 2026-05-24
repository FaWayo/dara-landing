"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const roles = [
  { value: "shopper", label: "Shopper" },
  { value: "brand", label: "Fashion Brand" },
  { value: "thrift", label: "Thrift Seller" },
  { value: "boutique", label: "Boutique" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!role || !email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, email }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="bg-red py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2
                  className="text-warm mb-4"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(48px, 7vw, 96px)",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  You&rsquo;re in.
                </h2>
                <p
                  className="font-sans text-warm/80"
                  style={{
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                    lineHeight: 1.6,
                  }}
                >
                  We&rsquo;ll reach out personally.
                </p>
              </motion.div>
            ) : (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-warm mb-6"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(48px, 7vw, 96px)",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Dress differently.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                  className="font-sans text-warm/80 mb-10 max-w-xl"
                  style={{
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                    lineHeight: 1.6,
                  }}
                >
                  Launching first in Accra.
                  <br />
                  Join early access to discover fashion, style your wardrobe,
                  and help shape Weara.
                </motion.p>

                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <p className="font-sans text-xs tracking-widest text-warm/60 mb-4 uppercase">
                    Who are you?
                  </p>

                  <div className="mb-6 flex flex-wrap gap-3">
                    {roles.map((r) => (
                      <label
                        key={r.value}
                        className={`font-sans cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-all duration-200 ${
                          role === r.value
                            ? "border-warm bg-warm/10 text-warm"
                            : "border-warm/30 text-warm/70 hover:border-warm/60 hover:text-warm"
                        }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={r.value}
                          checked={role === r.value}
                          onChange={(e) => setRole(e.target.value)}
                          className="sr-only"
                        />
                        {r.label}
                      </label>
                    ))}
                  </div>

                  <div className="flex max-w-2xl flex-col gap-4 md:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 rounded-full border border-warm/40 bg-transparent px-5 py-3 font-sans text-warm outline-none transition-colors placeholder:text-warm/50 focus:border-warm"
                      style={{ fontSize: "16px" }}
                    />

                    <button
                      type="submit"
                      disabled={status === "loading" || !role || !email}
                      className="shrink-0 rounded-full bg-warm px-6 py-3 font-sans font-semibold text-red transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                      style={{ fontSize: "16px", fontWeight: 600 }}
                    >
                      {status === "loading" ? "Joining\u2026" : "Join Early Access \u2192"}
                    </button>
                  </div>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-sans mt-4 text-sm text-warm/80"
                    >
                      Something went wrong.
                    </motion.p>
                  )}
                </motion.form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
