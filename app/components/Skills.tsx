"use client"

import { motion, useReducedMotion } from "framer-motion"
import { resume } from "@/app/data/resume"
import { fadeUp, stagger, pillVariant } from "@/app/lib/motion"

interface SkillGroupProps {
  title: string
  pills: string[]
  accent?: boolean
}

function SkillGroup({ title, pills, accent = false }: SkillGroupProps) {
  const reduced = useReducedMotion()

  return (
    <div>
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="text-sm font-semibold tracking-widest uppercase mb-4"
        style={{ color: "var(--fg-muted)" }}
      >
        {title}
      </motion.h3>
      <motion.ul
        variants={reduced ? fadeUp : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-wrap gap-2"
        role="list"
      >
        {pills.map((pill) => (
          <motion.li
            key={pill}
            variants={reduced ? fadeUp : pillVariant}
          >
            {accent ? (
              <AccentPill label={pill} />
            ) : (
              <span
                className="inline-flex px-3 py-1.5 rounded-full text-sm font-medium border"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--fg-muted)",
                }}
              >
                {pill}
              </span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

function AccentPill({ label }: { label: string }) {
  return (
    <span
      className="group relative inline-flex px-3 py-1.5 rounded-full text-sm font-medium border cursor-default transition-all duration-200"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--fg-muted)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)"
        e.currentTarget.style.color = "var(--accent)"
        e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--accent) 10%, var(--card))"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)"
        e.currentTarget.style.color = "var(--fg-muted)"
        e.currentTarget.style.backgroundColor = "var(--card)"
      }}
    >
      {label}
      <span
        className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        role="tooltip"
      >
        Development
      </span>
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--accent)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          Skills
        </motion.span>

        <motion.h2
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          What I work with
        </motion.h2>

        <div className="space-y-10">
          <SkillGroup title="Technical Skills" pills={resume.skills.technical} />
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
          <SkillGroup title="Operating Systems" pills={resume.skills.operatingSystems} />
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
          <SkillGroup title="Development Tools & Platforms" pills={resume.skills.development} accent />
        </div>
      </div>
    </section>
  )
}
