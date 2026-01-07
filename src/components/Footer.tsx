import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Devontrae Walls. Built with React & TypeScript.</p>
      </div>
    </motion.footer>
  )
}

