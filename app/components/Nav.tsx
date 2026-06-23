"use client"

import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"

const SECTIONS = ["hero", "about", "skills", "experience", "education", "contact"]
const LABELS: Record<string, string> = {
  hero: "Home",
  about: "About",
  skills: "Skills",
  experience: "Experience",
  education: "Education",
  contact: "Contact",
}

export default function Nav() {
  const [active, setActive] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 80%, transparent)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-sm tracking-wide text-[var(--fg)]">BP</span>

        <ul className="hidden md:flex items-center gap-1">
          {SECTIONS.filter((s) => s !== "hero").map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="px-3 py-1.5 text-sm rounded-md transition-colors"
                style={{
                  color: active === id ? "var(--accent)" : "var(--fg-muted)",
                  fontWeight: active === id ? 500 : 400,
                }}
                aria-current={active === id ? "page" : undefined}
              >
                {LABELS[id]}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  )
}
