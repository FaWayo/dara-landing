"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

const roles = [
  {
    id: "buyer" as const,
    title: "Discover outfits",
    desc: "Find styles from my wardrobe\nand sellers around me.",
  },
  {
    id: "seller" as const,
    title: "Sell my pieces",
    desc: "Reach buyers who already\nwant what I sell.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function WaitlistSignup() {
  const [role, setRole] = useState<"buyer" | "seller" | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focused, setFocused] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const stored = sessionStorage.getItem("joinAs");
    if (stored === "seller") {
      setRole("seller");
      sessionStorage.removeItem("joinAs");
    } else if (stored === "buyer") {
      setRole("buyer");
      sessionStorage.removeItem("joinAs");
    }
  }, []);

  const handleSubmit = async () => {
    if (!email || !role) return;
    setStatus("loading");

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: role === "buyer" ? "Buyer" : "Seller",
          email,
        }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  const headline =
    role === null ? "Be first into Dara." : role === "buyer" ? "You\u2019re in the right place." : "List your pieces. Be first.";

  const subtext =
    role === null
      ? "Who are you joining as?"
      : role === "buyer"
        ? "Dara is launching soon.\nWe will reach out personally."
        : "No monthly fees. No upfront cost.\nWe reach out to get you set up.";

  const inputBorder = focused
    ? "1.5px solid rgba(250,247,242,0.8)"
    : "1.5px solid rgba(250,247,242,0.3)";

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#EF233C" }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 block font-sans text-xs uppercase tracking-[0.25em]"
          style={{ color: "rgba(250,247,242,0.7)" }}
        >
          JOIN THE WAITLIST
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="font-serif mb-4"
          style={{
            color: "#FAF7F2",
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 1,
          }}
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="mb-12 font-sans"
          style={{
            color: "rgba(250,247,242,0.75)",
            fontSize: "clamp(15px, 1.4vw, 18px)",
            lineHeight: 1.6,
          }}
        >
          {subtext}
        </motion.p>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
          className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {roles.map((r) => {
            const selected = role === r.id;

            return (
              <motion.button
                key={r.id}
                variants={fadeUp}
                onClick={() => setRole(r.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                type="button"
                style={{
                  padding: "20px 24px",
                  borderRadius: "12px",
                  border: selected
                    ? "1.5px solid rgba(250,247,242,0.9)"
                    : "1.5px solid rgba(250,247,242,0.25)",
                  backgroundColor: selected
                    ? "rgba(250,247,242,0.18)"
                    : "rgba(250,247,242,0.08)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (!selected) {
                    e.currentTarget.style.border = "1.5px solid rgba(250,247,242,0.45)";
                    e.currentTarget.style.backgroundColor = "rgba(250,247,242,0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!selected) {
                    e.currentTarget.style.border = "1.5px solid rgba(250,247,242,0.25)";
                    e.currentTarget.style.backgroundColor = "rgba(250,247,242,0.08)";
                  }
                }}
              >
                <p
                  className="font-sans mb-2 uppercase"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: "rgba(250,247,242,0.5)",
                  }}
                >
                  I WANT TO
                </p>
                <p
                  className="font-serif mb-2"
                  style={{ color: "#FAF7F2", fontSize: "20px" }}
                >
                  {r.title}
                </p>
                <p
                  className="font-sans"
                  style={{
                    fontSize: "13px",
                    color: "rgba(250,247,242,0.6)",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {r.desc}
                </p>

                <AnimatePresence>
                  {selected && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#FAF7F2",
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {role !== null && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-3 md:flex-row md:gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="your@email.com"
                  className="w-full"
                  style={{
                    backgroundColor: "rgba(250,247,242,0.12)",
                    border: inputBorder,
                    borderRadius: "100px",
                    padding: "16px 24px",
                    color: "#FAF7F2",
                    fontSize: "16px",
                    outline: "none",
                    fontFamily: "var(--font-sans)",
                    transition: "border 0.2s ease",
                  }}
                />

                <motion.button
                  onClick={handleSubmit}
                  disabled={status === "loading" || !email}
                  whileHover={!status.includes("loading") && email ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  style={{
                    backgroundColor: "#FAF7F2",
                    color: "#EF233C",
                    border: "none",
                    borderRadius: "100px",
                    padding: "16px 32px",
                    fontSize: "15px",
                    fontWeight: 600,
                    fontFamily: "var(--font-sans)",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                    opacity: status === "loading" || !email ? 0.6 : 1,
                  }}
                >
                  {status === "idle" && "Join Dara \u2192"}
                  {status === "loading" && "Joining..."}
                  {status === "success" && "You\u2019re in \u2713"}
                  {status === "error" && "Try again"}
                </motion.button>
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="font-sans mt-4"
                    style={{
                      fontSize: "14px",
                      color: "rgba(250,247,242,0.85)",
                      lineHeight: 1.6,
                    }}
                  >
                    {role === "seller"
                      ? "You\u2019re on the seller list.\nWe\u2019ll reach out to get you set up \u2014\nno fees, no pressure."
                      : "You\u2019re on the list.\nWe\u2019ll reach out personally before launch."}
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="font-sans mt-4"
                    style={{
                      fontSize: "14px",
                      color: "rgba(250,247,242,0.7)",
                      lineHeight: 1.6,
                    }}
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <p
          className="font-sans mt-12"
          style={{
            fontSize: "12px",
            color: "rgba(250,247,242,0.4)",
            letterSpacing: "0.05em",
          }}
        >
          No spam. No sharing your data. Just Dara.
        </p>
      </div>
    </section>
  );
}
