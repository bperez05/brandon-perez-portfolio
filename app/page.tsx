import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Skills from "@/app/components/Skills"
import Experience from "@/app/components/Experience"
import Education from "@/app/components/Education"
import Contact from "@/app/components/Contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}
