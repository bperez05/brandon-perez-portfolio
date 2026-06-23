"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { resume, type Experience as ExperienceType } from "@/app/data/resume"
import { fadeUp, slideLeft, slideRight } from "@/app/lib/motion"

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceType
  index: number
}) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const isLeft = index % 2 === 0
  const cardVariant = reduced ? fadeUp : isLeft ? slideLeft : slideRight

  return (
    <div
      className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
    >
      <motion.article
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="rounded-2xl border p-6 cursor-pointer group"
        style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "var(--accent)" }}
              >
                {exp.company}
              </span>
              {exp.end === "Present" && (
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
                    color: "var(--accent)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                  Current
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold leading-tight mb-1">{exp.role}</h3>
            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
              {exp.location} · {exp.start} – {exp.end}
            </p>
          </div>
          <ChevronDown
            size={18}
            className="shrink-0 mt-1 transition-transform duration-300"
            style={{
              color: "var(--fg-muted)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Preview bullet */}
        {!open && (
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            {exp.bullets[0]}
          </p>
        )}

        {/* Expanded bullets */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduced ? 0.1 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                  <span
                    className="mt-2 w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <span style={{ color: "var(--fg-muted)" }}>{bullet}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.article>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--accent)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          Experience
        </motion.span>

        <motion.h2
          id="experience-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          Where I&apos;ve worked
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop only) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />

          {/* Timeline dots */}
          <div className="hidden md:flex flex-col absolute left-1/2 -translate-x-1/2 top-0 bottom-0 justify-around pointer-events-none" aria-hidden="true">
            {resume.experience.map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full border-2"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--accent)",
                }}
              />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {resume.experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-center" style={{ color: "var(--fg-muted)" }}>
          Click any card to expand full details
        </p>
      </div>
    </section>
  )
}
