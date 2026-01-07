import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '../data/experiences'
import { highlightReact } from '../utils/getTechIcon'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
}

interface ExperienceProps {
  openAccordion: number | null
  toggleAccordion: (index: number) => void
}

export const Experience = ({ openAccordion, toggleAccordion }: ExperienceProps) => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="title-number">03.</span>
          Where I've Worked
        </motion.h2>
        <motion.div 
          className="experiences"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`experience-card ${openAccordion === index ? 'active' : ''}`}
              variants={itemVariants}
            >
              <motion.div 
                className="experience-header"
                onClick={() => toggleAccordion(index)}
                whileHover={{ opacity: 0.9 }}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="position">{exp.position}</p>
                </div>
                <div className="experience-header-right">
                  <span className="period">{exp.period}</span>
                  <motion.svg
                    className="accordion-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{ rotate: openAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </div>
              </motion.div>
              <AnimatePresence>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="experience-content">
                      <ul className="experience-description">
                        {exp.description.map((desc, descIndex) => (
                          <motion.li 
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: descIndex * 0.05 }}
                          >
                            {highlightReact(desc)}
                          </motion.li>
                        ))}
                      </ul>
                      {exp.technologies && (
                        <motion.div 
                          className="experience-technologies"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span 
                              key={techIndex} 
                              className="tech-tag"
                              whileHover={{ scale: 1.1 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.03 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

