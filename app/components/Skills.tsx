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
          <motion.li key={pill} variants={reduced ? fadeUp : pillVariant}>
            {accent ? <AccentPill label={pill} /> : <DefaultPill label={pill} />}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

function DefaultPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex px-3 py-1.5 rounded-full text-sm font-medium border"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--fg-muted)",
      }}
    >
      {label}
    </span>
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
    </span>
  )
}

const divider = (
  <div className="border-t" style={{ borderColor: "var(--border)" }} />
)

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
          <SkillGroup title="Analysis & Methodology" pills={resume.skills.analysis} />
          {divider}
          <SkillGroup title="Technology Platforms" pills={resume.skills.platforms} />
          {divider}
          <SkillGroup title="Development" pills={resume.skills.development} accent />
          {divider}
          <SkillGroup title="Tools & Platforms" pills={resume.skills.tools} accent />
          {divider}
          <SkillGroup title="Soft Skills" pills={resume.skills.soft} />
        </div>
      </div>
    </section>
  )
}
