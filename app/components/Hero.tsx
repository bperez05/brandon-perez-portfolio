"use client"

import { motion, useReducedMotion } from "framer-motion"
import { resume } from "@/app/data/resume"
import { fadeUp, fadeIn, stagger } from "@/app/lib/motion"

const words = resume.name.split(" ")

export default function Hero() {
  const reduced = useReducedMotion()

  const wordVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Introduction"
    >
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in srgb, var(--accent) 8%, transparent), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Name */}
        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="font-bold tracking-tight leading-none mb-6"
          style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="inline-block w-[3px] ml-1 align-middle"
            style={{
              height: "0.85em",
              backgroundColor: "var(--accent)",
              animation: "blink 1.1s step-start infinite",
            }}
            aria-hidden="true"
          />
        </motion.h1>

        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl font-medium mb-4"
          style={{ color: "var(--fg-muted)" }}
        >
          {resume.title} · {resume.company} · {resume.location}
        </motion.p>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--fg-muted)" }}
        >
          {resume.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)"
              e.currentTarget.style.color = "#fff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "var(--accent)"
            }}
          >
            View My Work
          </a>
          <a
            href={`mailto:${resume.email}`}
            className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
          >
            Contact Me
          </a>
          <a
            href="/brandon-perez-resume.pdf"
            download
            className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border"
            style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--fg-muted)"
              e.currentTarget.style.color = "var(--fg)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)"
              e.currentTarget.style.color = "var(--fg-muted)"
            }}
          >
            Download Résumé
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
