import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { getTechIcon } from '../utils/getTechIcon'

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

interface ProjectsProps {
  openProjectAccordion: number | null
  toggleProjectAccordion: (index: number) => void
}

export const Projects = ({ openProjectAccordion, toggleProjectAccordion }: ProjectsProps) => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="title-number">02.</span>
          Featured Projects
        </motion.h2>
        <motion.div 
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`project-card ${openProjectAccordion === index ? 'active' : ''}`}
              variants={itemVariants}
            >
              <motion.div 
                className="project-header"
                onClick={() => toggleProjectAccordion(index)}
                whileHover={{ opacity: 0.9 }}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <motion.svg
                  className="accordion-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ rotate: openProjectAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.div>
              <AnimatePresence>
                {openProjectAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="project-content">
                      {project.features && project.features.length > 0 && (
                        <ul className="project-features">
                          {project.features.map((feature, featureIndex) => (
                            <motion.li 
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.05 }}
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      )}
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex} 
                            className="project-tech-tag"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.03 }}
                          >
                            <span className="tech-icon">{getTechIcon(tech)}</span>
                            {tech}
                          </motion.span>
                        ))}
                      </div>
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

