"use client"

import { motion, useReducedMotion } from "framer-motion"
import { GraduationCap, BadgeCheck, Plus } from "lucide-react"
import { resume } from "@/app/data/resume"
import { fadeUp, stagger } from "@/app/lib/motion"

export default function Education() {
  const reduced = useReducedMotion()

  return (
    <section id="education" className="py-24 px-6" aria-labelledby="education-heading">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--accent)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          Education & Certifications
        </motion.span>

        <motion.h2
          id="education-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          Credentials
        </motion.h2>

        <motion.div
          variants={reduced ? fadeUp : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {/* Education card */}
          {resume.education.map((edu, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="relative rounded-2xl border p-6 overflow-hidden"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              {/* Certified badge */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
                  color: "var(--accent)",
                }}
              >
                <BadgeCheck size={12} aria-hidden="true" />
                Certified
              </div>

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
                aria-hidden="true"
              >
                <GraduationCap size={20} style={{ color: "var(--accent)" }} />
              </div>

              <h3 className="text-lg font-semibold leading-tight mb-2">{edu.degree}</h3>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>
                {edu.institution}
              </p>
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                {edu.location} · {edu.date}
              </p>
            </motion.article>
          ))}

          {/* Placeholder card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border-2 border-dashed p-6 flex flex-col items-center justify-center gap-3 min-h-[180px]"
            style={{ borderColor: "var(--border)" }}
            aria-label="Placeholder for future certification"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "var(--border)" }}
              aria-hidden="true"
            >
              <Plus size={20} style={{ color: "var(--fg-muted)" }} />
            </div>
            <p className="text-sm font-medium" style={{ color: "var(--fg-muted)" }}>
              + Add Certification
            </p>
            <p className="text-xs text-center" style={{ color: "var(--fg-muted)", opacity: 0.6 }}>
              Future credentials will appear here
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
