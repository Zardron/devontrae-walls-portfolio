import { motion } from 'framer-motion'
import { volunteerExperience } from '../data/volunteer'

export const Volunteer = () => {
  return (
    <section className="section volunteer-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="title-number">04.</span>
          Volunteer Experience
        </motion.h2>
        <motion.div 
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -5 }}
        >
          <div className="experience-header">
            <div>
              <h3 className="company-name">{volunteerExperience.organization}</h3>
              <p className="position">{volunteerExperience.position}</p>
            </div>
            <span className="period">{volunteerExperience.period}</span>
          </div>
          <ul className="experience-description">
            {volunteerExperience.description.map((desc, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              >
                {desc}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

