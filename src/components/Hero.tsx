import { motion, MotionValue } from 'framer-motion'
import profilePhoto from '../assets/profile.jpg'

interface HeroProps {
  opacity: MotionValue<number>
  scale: MotionValue<number>
}

export const Hero = ({ opacity, scale }: HeroProps) => {
  return (
    <section id="about" className="hero">
      <div className="hero-container">
        <div className="hero-wrapper">
          <motion.div 
            className="hero-content"
            style={{ opacity, scale }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              Hi, my name is
            </motion.span>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: { 
                  duration: 1, 
                  delay: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
            >
              Devontrae Walls.
            </motion.h1>
            
            <motion.h2 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.7,
                  ease: "easeOut"
                }
              }}
            >
              I build things for the web.
            </motion.h2>
            
            <motion.div 
              className="hero-description-wrapper"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: { 
                  duration: 0.8, 
                  delay: 0.9,
                  ease: "easeOut"
                }
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 1.1, duration: 0.6 }
                }}
              >
                I'm a <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="highlight-text"
                >Senior Full-Stack Developer</motion.strong> specializing in building exceptional digital experiences.
              </motion.p>
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 1.2, duration: 0.6 }
                }}
              >
                Currently focused on <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="highlight-text"
                >Wordpress</motion.strong>, <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.45, duration: 0.5 }}
                  className="highlight-text"
                >JavaScript</motion.strong>, <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="highlight-text"
                >TypeScript</motion.strong>, <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.55, duration: 0.5 }}
                  className="highlight-text"
                >React</motion.strong>, <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="highlight-text"
                >NextJs</motion.strong>, <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.65, duration: 0.5 }}
                  className="highlight-text"
                >NodeJs</motion.strong>, and <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                  className="highlight-text"
                >Infrastructure</motion.strong> with over <motion.strong 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.75, duration: 0.5 }}
                  className="highlight-text"
                >14 years</motion.strong> of experience.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: { 
                  duration: 0.8, 
                  delay: 1.3,
                  ease: "easeOut"
                }
              }}
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: "0 12px 40px rgba(100, 255, 218, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 4px 20px rgba(100, 255, 218, 0.2)",
                    "0 8px 30px rgba(100, 255, 218, 0.4)",
                    "0 4px 20px rgba(100, 255, 218, 0.2)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: 0,
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8, 
              ease: "easeOut",
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="hero-image-rotate-glow"></div>
            <motion.img 
              src={profilePhoto} 
              alt="Devontrae Walls" 
              className="hero-profile-photo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: 1, duration: 0.6 }
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

