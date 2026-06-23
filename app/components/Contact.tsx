"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { resume } from "@/app/data/resume"
import { fadeUp, stagger } from "@/app/lib/motion"

const links = [
  {
    icon: Mail,
    href: `mailto:${resume.email}`,
    label: "Send email",
    value: resume.email,
  },
  {
    icon: Phone,
    href: `tel:${resume.phone.replace(/\D/g, "")}`,
    label: "Call phone number",
    value: resume.phone,
  },
  {
    icon: MapPin,
    href: null,
    label: "Location",
    value: resume.location,
  },
]

const GithubSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const socials = [
  {
    SocialIcon: GithubSVG,
    href: "#",
    label: "GitHub profile (link placeholder)",
  },
  {
    SocialIcon: LinkedinSVG,
    href: "#",
    label: "LinkedIn profile (link placeholder)",
  },
  {
    SocialIcon: null,
    mailIcon: true,
    href: `mailto:${resume.email}`,
    label: "Email",
  },
] as const

export default function Contact() {
  const reduced = useReducedMotion()

  return (
    <section id="contact" className="py-24 px-6 border-t" style={{ borderColor: "var(--border)" }} aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--accent)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          Contact
        </motion.span>

        <motion.h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          Let&apos;s connect
        </motion.h2>

        <motion.p
          className="text-base max-w-md mb-12 leading-relaxed"
          style={{ color: "var(--fg-muted)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          Whether you have a question, opportunity, or just want to say hello — my inbox is always open.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact details */}
          <motion.ul
            variants={reduced ? fadeUp : stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            {links.map(({ icon: Icon, href, label, value }) => (
              <motion.li key={label} variants={fadeUp}>
                {href ? (
                  <a
                    href={href}
                    aria-label={label}
                    className="flex items-center gap-3 group"
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors duration-200 group-hover:border-[var(--accent)]"
                      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                      aria-hidden="true"
                    >
                      <Icon size={16} style={{ color: "var(--accent)" }} />
                    </span>
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-[var(--accent)]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {value}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                      aria-hidden="true"
                    >
                      <Icon size={16} style={{ color: "var(--accent)" }} />
                    </span>
                    <span className="text-sm" style={{ color: "var(--fg-muted)" }}>
                      {value}
                    </span>
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA + socials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-6"
          >
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 self-start"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
            >
              <Mail size={16} aria-hidden="true" />
              Send a message
            </a>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--fg-muted)" }}>
                Find me online
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ SocialIcon, href, label, ...rest }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200"
                    style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--fg-muted)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)"
                      e.currentTarget.style.color = "var(--accent)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)"
                      e.currentTarget.style.color = "var(--fg-muted)"
                    }}
                  >
                    {"mailIcon" in rest && rest.mailIcon
                      ? <Mail size={16} aria-hidden="true" />
                      : SocialIcon && <SocialIcon />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t text-center" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
          © {new Date().getFullYear()} {resume.name} · Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </section>
  )
}
