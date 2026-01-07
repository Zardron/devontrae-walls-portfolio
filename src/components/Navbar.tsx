import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

interface NavbarProps {
  scrolled: boolean
}

export const Navbar = ({ scrolled }: NavbarProps) => {
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
        >
          <img src={logo} alt="Devontrae Walls Logo" className="logo-img" />
        </motion.a>
        <div className="nav-links">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

