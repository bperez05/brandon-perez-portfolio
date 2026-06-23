"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MapPin, Briefcase, Building2, Globe, Clock } from "lucide-react"
import { resume } from "@/app/data/resume"
import { fadeUp, slideLeft, slideRight } from "@/app/lib/motion"

const facts = [
  { icon: MapPin, label: "Location", value: resume.location },
  { icon: Briefcase, label: "Role", value: "Genius — Senior Technical Support Specialist" },
  { icon: Building2, label: "Company", value: resume.company },
  { icon: Globe, label: "Languages", value: null },
  { icon: Clock, label: "Experience", value: "6+ Years" },
]

export default function About() {
  const reduced = useReducedMotion()
  const leftV = reduced ? fadeUp : slideLeft
  const rightV = reduced ? fadeUp : slideRight

  return (
    <section id="about" className="py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--accent)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          About
        </motion.span>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Narrative */}
          <motion.div
            variants={leftV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            >
              A technologist at heart, a people-first professional by practice.
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              <p>
                I&apos;ve spent the last six-plus years at Apple as a Genius — diagnosing hardware failures,
                navigating OS-level recoveries, and translating complex technical problems into plain-language
                solutions that actually stick for customers.
              </p>
              <p>
                My toolkit spans the full Apple ecosystem and beyond: mobile device management, system-level
                diagnostics, cross-platform troubleshooting, and full-stack web development. Bilingual in
                English and Spanish, I bring the same clarity of communication whether I&apos;m helping a
                first-time iPhone user or a power user deep in terminal flags.
              </p>
              <p>
                Outside the Genius Bar, I hold a Full Stack Web Development certification from SMU, giving
                me a foundation in React, Node.js, and modern database systems — so I can read the code
                behind the tools I support every day.
              </p>
            </div>
          </motion.div>

          {/* Quick facts card */}
          <motion.div
            variants={rightV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-2xl p-6 border"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--fg-muted)" }}>
              Quick Facts
            </h3>
            <ul className="space-y-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider block mb-0.5" style={{ color: "var(--fg-muted)" }}>
                      {label}
                    </span>
                    {label === "Languages" ? (
                      <div className="flex items-center gap-2">
                        {resume.languages.map((lang) => (
                          <span
                            key={lang}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold"
                            style={{
                              backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
                              color: "var(--accent)",
                              border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                            }}
                          >
                            {lang === "English" ? "EN" : "ES"} · {lang}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-sm font-medium">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
