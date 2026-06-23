import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/app/lib/theme-context"
import Nav from "@/app/components/Nav"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Brandon P. Perez — Senior Technical Support Specialist",
  description:
    "Technical support professional with 6+ years at Apple, specializing in hardware, software, and mobile device troubleshooting.",
  openGraph: {
    title: "Brandon P. Perez",
    description: "Genius · Apple · Dallas, TX",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
