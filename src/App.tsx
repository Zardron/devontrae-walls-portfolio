import { useEffect, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'
import './App.css'
import { ParticlesBackground } from './components/ParticlesBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Volunteer } from './components/Volunteer'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
  const [openProjectAccordion, setOpenProjectAccordion] = useState<number | null>(0)
  const [particlesLoaded, setParticlesLoaded] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
      setParticlesLoaded(true)
    })
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
      delay: 0,
      disable: false,
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99
    })

    // Throttled scroll handler for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          setShowScrollTop(window.scrollY > 100)
          AOS.refresh() // Refresh AOS on scroll to prevent glitches
          ticking = false
        })
        ticking = true
      }
    }

    // Refresh AOS on resize
    const handleResize = () => {
      AOS.refresh()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Initial AOS refresh
    AOS.refresh()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const toggleProjectAccordion = (index: number) => {
    setOpenProjectAccordion(openProjectAccordion === index ? null : index)
  }

  return (
    <div className="portfolio">
      {particlesLoaded && <ParticlesBackground />}
      
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <Navbar scrolled={scrolled} />
      <Hero opacity={opacity} scale={scale} />
      <Skills />
      <Projects 
        openProjectAccordion={openProjectAccordion}
        toggleProjectAccordion={toggleProjectAccordion}
      />
      <Experience 
        openAccordion={openAccordion}
        toggleAccordion={toggleAccordion}
      />
      <Volunteer />
      <Contact />
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  )
}

export default App
