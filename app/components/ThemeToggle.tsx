"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/app/lib/theme-context"

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-2 rounded-lg transition-colors hover:bg-white/10 text-[var(--fg-muted)] hover:text-[var(--fg)]"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
