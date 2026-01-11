import Hero from '@/components/sections/Hero'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import CodingProfiles from '@/components/sections/CodingProfiles'

export default function Home(){
  return(
    <>
      <Hero />
      <Education />
      <Projects />
      <Experience />
      <CodingProfiles />
      <Skills />
      <Contact />
    </>
  )
}