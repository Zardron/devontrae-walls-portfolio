import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

interface Experience {
  company: string
  position: string
  period: string
  description: string[]
  technologies?: string[]
}

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Languages & Frameworks',
    items: ['NodeJS', 'TypeScript', 'React', 'Java', 'Spring Boot', 'Vue', 'Angular']
  },
  {
    category: 'Databases & APIs',
    items: ['MySQL', 'GraphQL', 'MongoDB', 'Firebase', 'Postman']
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Docker', 'Kubernetes', 'Kafka', 'AWS', 'Google Cloud Platform', 'Terraform', 'Helm']
  },
  {
    category: 'Tools & CI/CD',
    items: ['Jira', 'GitLab CI/CD', 'Bitbucket CI/CD', 'Git']
  }
]

const experiences: Experience[] = [
  {
    company: 'Icred, Inc.',
    position: 'Staff Engineer / Tech Lead',
    period: '2025 - Present',
    description: [
      'Lead a high-performing engineering team at an innovative AI startup, driving technical strategy and architectural decisions for scalable AI-powered applications.',
      'Architect and maintain robust backend APIs using NodeJS, GraphQL, and MongoDB, ensuring high performance and reliability for production systems.',
      'Implement comprehensive API documentation standards using Postman, enabling seamless integration for frontend teams and external partners.',
      'Manage and distribute development tasks across cross-functional teams using Jira, optimizing sprint planning and delivery timelines.',
      'Design and implement DevOps infrastructure solutions using Kubernetes and Helm, reducing deployment time by 40% and improving system reliability.',
      'Establish and enforce coding standards, including comprehensive unit testing, code coverage requirements, and automated linting processes.',
      'Mentor junior and mid-level engineers, conducting code reviews and technical training sessions to elevate team capabilities.'
    ],
    technologies: ['NodeJS', 'GraphQL', 'MongoDB', 'Postman', 'Jira', 'Kubernetes', 'Helm', 'CI/CD']
  },
  {
    company: 'Achieve, Inc.',
    position: 'Software Engineer',
    period: '2022 - 2025',
    description: [
      'Developed enterprise-grade Java applications using Spring Boot framework, building scalable microservices for consumer finance operations.',
      'Designed and maintained RESTful and GraphQL APIs, serving millions of requests daily with sub-100ms response times.',
      'Created comprehensive API documentation using Postman, streamlining integration processes for internal and external stakeholders.',
      'Implemented event-driven architecture using Confluent Cloud Kafka, processing high-volume financial transactions with 99.9% uptime.',
      'Managed cloud infrastructure using Terraform, Kubernetes, and Helm, enabling infrastructure-as-code practices and automated deployments.',
      'Collaborated within SCRUM teams as an individual contributor, working closely with product managers and engineers to deliver features on time.',
      'Optimized database queries and implemented caching strategies, improving application performance by 35% and reducing infrastructure costs.'
    ],
    technologies: ['Java', 'Spring Boot', 'NodeJS', 'GraphQL', 'MongoDB', 'Kafka', 'Terraform', 'Kubernetes', 'Helm', 'AWS']
  },
  {
    company: 'Alpha Centauri, Inc.',
    position: 'Sr. Software Engineer',
    period: '2021 - 2022',
    description: [
      'Architected and built real-time video streaming infrastructure for a social media startup, supporting thousands of concurrent users.',
      'Developed streaming server and client applications using Mediasoup JavaScript library, implementing WebRTC protocols for low-latency video communication.',
      'Designed and maintained scalable backend APIs using NodeJS, GraphQL, and MongoDB, handling high-traffic social media interactions.',
      'Created detailed API documentation using Postman, ensuring seamless integration between frontend and backend systems.',
      'Leveraged AWS Media Services and Lambda functions to build on-demand video streaming solutions, reducing infrastructure costs by 30%.',
      'Managed development workflow using Jira and Bitbucket, distributing tasks and coordinating with distributed engineering teams.',
      'Implemented automated testing and CI/CD pipelines, reducing deployment time and improving code quality standards.'
    ],
    technologies: ['NodeJS', 'GraphQL', 'MongoDB', 'Postman', 'Mediasoup', 'AWS', 'Lambda', 'Jira', 'Bitbucket']
  },
  {
    company: 'Medik8 Mobile, Inc.',
    position: 'Sr. Software Engineer',
    period: '2020 - 2021',
    description: [
      'Led refactoring initiatives for inventory tracking software, improving code maintainability and reducing technical debt by 50%.',
      'Designed and developed responsive websites for clients in the California cannabis industry, ensuring compliance with state regulations.',
      'Built a custom WordPress plugin to seamlessly connect client websites with inventory tracking software, enabling real-time inventory synchronization.',
      'Collaborated with cross-functional teams including designers, product managers, and QA engineers to deliver high-quality software solutions.',
      'Optimized database performance and implemented caching strategies, reducing page load times by 45% and improving user experience.',
      'Managed paid search and social media marketing integrations, increasing client engagement and conversion rates.'
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'REST APIs']
  },
  {
    company: 'ForkLabs Creative, LLC.',
    position: 'Freelance Full-Stack Developer',
    period: '2017 - 2019',
    description: [
      'Built minimum viable products (MVPs) for multiple startups, delivering scalable solutions from concept to production within tight deadlines.',
      'Designed, developed, and hosted custom websites for local businesses, increasing their online presence and customer engagement.',
      'Managed freelance teams including developers, web designers, and ad specialists, coordinating projects and ensuring quality deliverables.',
      'Provided consulting services for SaaS companies, restaurants, and professional service businesses, offering technical expertise and strategic guidance.',
      'Implemented modern web technologies and best practices, ensuring responsive designs and optimal performance across all devices.',
      'Established long-term client relationships through exceptional service delivery and technical innovation.'
    ],
    technologies: ['React', 'NodeJS', 'TypeScript', 'Various Frameworks']
  },
  {
    company: 'ActivePitch, Inc.',
    position: 'Jr. Software Engineer',
    period: '2017 - 2018',
    description: [
      'Developed RESTful microservices using the MERN stack (MongoDB, Express, React, Node.js), building scalable backend services for the entertainment industry.',
      'Containerized applications using Docker, ensuring consistent deployment environments and simplifying the development workflow.',
      'Created automation scripts and testing frameworks using ElectronJS, reducing manual testing time by 60% and improving code quality.',
      'Collaborated with senior engineers to implement best practices in software development, including code reviews and pair programming.',
      'Participated in agile development processes, contributing to sprint planning and daily standups.',
      'Maintained and debugged production systems, ensuring high availability and performance for Hollywood entertainment industry clients.'
    ],
    technologies: ['MERN Stack', 'Docker', 'ElectronJS', 'REST APIs', 'MongoDB']
  },
  {
    company: 'TechStart Solutions',
    position: 'Software Developer',
    period: '2015 - 2017',
    description: [
      'Developed full-stack web applications using modern JavaScript frameworks, building responsive user interfaces and robust backend services.',
      'Collaborated with product teams to translate business requirements into technical specifications and implementation plans.',
      'Implemented database solutions using MySQL and MongoDB, designing schemas optimized for performance and scalability.',
      'Participated in code reviews and technical discussions, contributing to architectural decisions and best practices.',
      'Maintained legacy systems while migrating to modern technology stacks, ensuring zero downtime during transitions.',
      'Created technical documentation and user guides, facilitating knowledge transfer and onboarding processes.'
    ],
    technologies: ['JavaScript', 'React', 'NodeJS', 'MySQL', 'MongoDB']
  },
  {
    company: 'Digital Innovations Group',
    position: 'Junior Web Developer',
    period: '2013 - 2015',
    description: [
      'Built responsive websites and web applications using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile optimization.',
      'Assisted in the development of client-side and server-side applications, learning industry best practices and modern development workflows.',
      'Collaborated with senior developers on large-scale projects, contributing to codebases and learning advanced programming concepts.',
      'Participated in team meetings and technical training sessions, continuously improving technical skills and knowledge.',
      'Maintained and updated existing websites, fixing bugs and implementing new features based on client requirements.',
      'Gained foundational experience in software development lifecycle, version control, and collaborative development practices.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP']
  }
]

const volunteerExperience = {
  organization: "Mr Book's Academy",
  position: 'Web Development / Programming Instructor',
  period: '2017 - 2019',
  description: [
    'Taught web development and programming fundamentals to students, covering HTML, CSS, JavaScript, and modern frameworks.',
    'Developed comprehensive curriculum and hands-on projects, helping students build practical skills and portfolio projects.',
    'Mentored students in their coding journey, providing guidance on best practices, debugging techniques, and career development.',
    'Created engaging learning materials and coding exercises, fostering an inclusive and supportive learning environment.'
  ]
}

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
      ease: "easeOut"
    }
  }
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio">
      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            DW
          </motion.div>
          <div className="nav-links">
            {['About', 'Experience', 'Skills', 'Contact'].map((link, index) => (
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

      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            style={{ opacity, scale }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="greeting"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Devontrae Walls
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Full-Stack Web Application Developer
            </motion.p>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Specializing in <strong>Java Spring Boot</strong>, <strong>TypeScript</strong>, <strong>React</strong> and <strong>Infrastructure</strong>.
              With over 12 years of experience building scalable applications and leading engineering teams.
            </motion.p>
            
            <motion.div 
              className="hero-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Memphis, TN</span>
            </motion.div>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="#experience" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Experience
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating Tech Icons */}
          <div className="floating-icons">
            {['⚛️', '☕', '🐳', '⚡', '🚀'].map((icon, index) => (
              <motion.div
                key={index}
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [0, -30, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.8,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + index * 15}%`,
                  top: `${30 + index * 10}%`
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="title-number">01.</span>
            Technical Skills
          </motion.h2>
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card"
                variants={itemVariants}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="skill-category-title">{skill.category}</h3>
                <div className="skill-tags">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span 
                      key={itemIndex} 
                      className="skill-tag"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="title-number">02.</span>
            Professional Experience
          </motion.h2>
          <motion.div 
            className="experiences"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="experience-card"
                variants={itemVariants}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="position">{exp.position}</p>
                  </div>
                  <motion.span 
                    className="period"
                    whileHover={{ scale: 1.1 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((desc, descIndex) => (
                    <motion.li 
                      key={descIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: descIndex * 0.1 }}
                    >
                      {desc}
                    </motion.li>
                  ))}
                </ul>
                {exp.technologies && (
                  <motion.div 
                    className="experience-technologies"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="tech-tag"
                        whileHover={{ 
                          scale: 1.15,
                          y: -3
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: techIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section volunteer-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="title-number">03.</span>
            Volunteer Experience
          </motion.h2>
          <motion.div 
            className="experience-card"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              x: 10,
              transition: { duration: 0.3 }
            }}
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {desc}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="title-number">04.</span>
            Get In Touch
          </motion.h2>
          <motion.div 
            className="contact-content"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
            </p>
            <div className="contact-info">
              <motion.a 
                href="tel:+12132949698" 
                className="contact-item"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </motion.svg>
                <span>(213) 294-9698</span>
              </motion.a>
              <motion.a 
                href="mailto:devontrae@gmail.com" 
                className="contact-item"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </motion.svg>
                <span>devontrae@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Devontrae Walls. Built with React & TypeScript.</p>
        </div>
      </motion.footer>
      </div>
  )
}

export default App
