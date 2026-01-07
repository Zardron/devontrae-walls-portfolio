import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

interface NavbarProps {
  scrolled: boolean
}

export const Navbar = ({ scrolled }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.a 
          href="#about"
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={closeMobileMenu}
        >
          <img src={logo} alt="Devontrae Walls Logo" className="logo-img" />
        </motion.a>
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </motion.svg>
        </button>
        <div className="nav-links">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onClick={closeMobileMenu}
            >
              {link}
            </motion.a>
          ))}
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={closeMobileMenu}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

