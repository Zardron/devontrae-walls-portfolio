import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import logo from './assets/logo.png'
import { 
  SiNodedotjs, SiTypescript, SiReact, SiNextdotjs, SiSpring, SiVuedotjs, SiAngular,
  SiCss3, SiMui, SiTailwindcss, SiSass, SiBootstrap,
  SiMysql, SiGraphql, SiMongodb, SiFirebase, SiPostman,
  SiDocker, SiKubernetes, SiApachekafka, SiAmazon, SiGooglecloud, SiTerraform, SiHelm,
  SiJira, SiGitlab, SiBitbucket, SiGit,
  SiWordpress, SiShopify, SiWoo, SiDrupal, SiMagento, SiHubspot,
  SiIonic, SiTwilio, SiSwift
} from 'react-icons/si'
import { FaReact, FaJava } from 'react-icons/fa'

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

interface Project {
  title: string
  description: string
  features?: string[]
  technologies: string[]
}

// Brand colors mapping for technologies
const techColors: { [key: string]: string } = {
  'NodeJS': '#339933',
  'TypeScript': '#3178C6',
  'React': '#61DAFB',
  'NextJS': '#000000',
  'Java': '#ED8B00',
  'Spring Boot': '#6DB33F',
  'Vue': '#4FC08D',
  'Angular': '#DD0031',
  'CSS3': '#1572B6',
  'Material UI': '#007FFF',
  'Tailwind CSS': '#06B6D4',
  'shadcn/ui': '#61DAFB',
  'Styled Components': '#DB7093',
  'SASS': '#CC6699',
  'Bootstrap': '#7952B3',
  'MySQL': '#4479A1',
  'GraphQL': '#E10098',
  'MongoDB': '#47A248',
  'Firebase': '#FFCA28',
  'Postman': '#FF6C37',
  'Docker': '#2496ED',
  'Kubernetes': '#326CE5',
  'Kafka': '#231F20',
  'AWS': '#FF9900',
  'Google Cloud Platform': '#4285F4',
  'Terraform': '#7B42BC',
  'Helm': '#0F1689',
  'Jira': '#0052CC',
  'GitLab CI/CD': '#FC6D26',
  'Bitbucket CI/CD': '#0052CC',
  'Git': '#F05032',
  'WordPress': '#21759B',
  'Shopify': '#96BF48',
  'WooCommerce': '#96588A',
  'Drupal': '#0678BE',
  'Magento': '#EE672F',
  'HubSpot CMS': '#FF7A59',
  'Ionic': '#3880FF',
  'Twilio': '#F22F46',
  'Swift': '#FA7343',
  'GStreamer': '#FF6B6B',
  'Capacitor': '#119EFF',
  'MediaSoup': '#FF6B6B',
  'WebRTC': '#333333',
  'HLS': '#FF6B6B',
  'AWS S3': '#FF9900',
  'AWS MediaConvert': '#FF9900',
  'Lambda': '#FF9900',
  'Close.io': '#FF6B6B'
}

// Icon mapping for technologies
const getTechIcon = (techName: string): React.ReactElement => {
  const iconMap: { [key: string]: React.ReactElement } = {
    'NodeJS': <SiNodedotjs style={{ color: techColors['NodeJS'] }} />,
    'TypeScript': <SiTypescript style={{ color: techColors['TypeScript'] }} />,
    'React': <SiReact style={{ color: techColors['React'] }} />,
    'NextJS': <SiNextdotjs style={{ color: techColors['NextJS'] }} />,
    'Java': <FaJava style={{ color: techColors['Java'] }} />,
    'Spring Boot': <SiSpring style={{ color: techColors['Spring Boot'] }} />,
    'Vue': <SiVuedotjs style={{ color: techColors['Vue'] }} />,
    'Angular': <SiAngular style={{ color: techColors['Angular'] }} />,
    'CSS3': <SiCss3 style={{ color: techColors['CSS3'] }} />,
    'Material UI': <SiMui style={{ color: techColors['Material UI'] }} />,
    'Tailwind CSS': <SiTailwindcss style={{ color: techColors['Tailwind CSS'] }} />,
    'shadcn/ui': <SiReact style={{ color: techColors['shadcn/ui'] }} />,
    'Styled Components': <FaReact style={{ color: techColors['Styled Components'] }} />,
    'SASS': <SiSass style={{ color: techColors['SASS'] }} />,
    'Bootstrap': <SiBootstrap style={{ color: techColors['Bootstrap'] }} />,
    'MySQL': <SiMysql style={{ color: techColors['MySQL'] }} />,
    'GraphQL': <SiGraphql style={{ color: techColors['GraphQL'] }} />,
    'MongoDB': <SiMongodb style={{ color: techColors['MongoDB'] }} />,
    'Firebase': <SiFirebase style={{ color: techColors['Firebase'] }} />,
    'Postman': <SiPostman style={{ color: techColors['Postman'] }} />,
    'Docker': <SiDocker style={{ color: techColors['Docker'] }} />,
    'Kubernetes': <SiKubernetes style={{ color: techColors['Kubernetes'] }} />,
    'Kafka': <SiApachekafka style={{ color: techColors['Kafka'] }} />,
    'AWS': <SiAmazon style={{ color: techColors['AWS'] }} />,
    'Google Cloud Platform': <SiGooglecloud style={{ color: techColors['Google Cloud Platform'] }} />,
    'Terraform': <SiTerraform style={{ color: techColors['Terraform'] }} />,
    'Helm': <SiHelm style={{ color: techColors['Helm'] }} />,
    'Jira': <SiJira style={{ color: techColors['Jira'] }} />,
    'GitLab CI/CD': <SiGitlab style={{ color: techColors['GitLab CI/CD'] }} />,
    'Bitbucket CI/CD': <SiBitbucket style={{ color: techColors['Bitbucket CI/CD'] }} />,
    'Git': <SiGit style={{ color: techColors['Git'] }} />,
    'WordPress': <SiWordpress style={{ color: techColors['WordPress'] }} />,
    'Shopify': <SiShopify style={{ color: techColors['Shopify'] }} />,
    'WooCommerce': <SiWoo style={{ color: techColors['WooCommerce'] }} />,
    'Drupal': <SiDrupal style={{ color: techColors['Drupal'] }} />,
    'Magento': <SiMagento style={{ color: techColors['Magento'] }} />,
    'HubSpot CMS': <SiHubspot style={{ color: techColors['HubSpot CMS'] }} />,
    'Ionic': <SiIonic style={{ color: techColors['Ionic'] }} />,
    'Twilio': <SiTwilio style={{ color: techColors['Twilio'] }} />,
    'Swift': <SiSwift style={{ color: techColors['Swift'] }} />,
    'Capacitor': <SiIonic style={{ color: techColors['Capacitor'] }} />,
    'AWS S3': <SiAmazon style={{ color: techColors['AWS S3'] }} />,
    'AWS MediaConvert': <SiAmazon style={{ color: techColors['AWS MediaConvert'] }} />,
    'Lambda': <SiAmazon style={{ color: techColors['Lambda'] }} />,
    'GStreamer': <SiNodedotjs style={{ color: techColors['GStreamer'] }} />,
    'MediaSoup': <SiNodedotjs style={{ color: techColors['MediaSoup'] }} />,
    'WebRTC': <SiReact style={{ color: techColors['WebRTC'] }} />,
    'HLS': <SiNodedotjs style={{ color: techColors['HLS'] }} />,
    'Close.io': <SiNodedotjs style={{ color: techColors['Close.io'] }} />
  }
  
  return iconMap[techName] || <SiReact style={{ color: techColors['React'] }} />
}

// Function to highlight React/reactjs in text
const highlightReact = (text: string): React.ReactNode => {
  const reactPattern = /\b(React|reactjs|ReactJS|React\.js)\b/gi
  const parts = text.split(reactPattern)
  
  return parts.map((part, index) => {
    // Check if this part matches the React pattern (case-insensitive)
    const isReact = /^(React|reactjs|ReactJS|React\.js)$/i.test(part)
    if (isReact) {
      return (
        <span key={index} style={{ color: techColors['React'], fontWeight: 600 }}>
          {part}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

const skills: Skill[] = [
  {
    category: 'Languages & Frameworks',
    items: ['NodeJS', 'TypeScript', 'React', 'NextJS', 'Java', 'Spring Boot', 'Vue', 'Angular']
  },
  {
    category: 'Styling & UI Libraries',
    items: ['CSS3', 'Material UI', 'Tailwind CSS', 'shadcn/ui', 'Styled Components', 'SASS', 'Bootstrap']
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
  },
  {
    category: 'CMS',
    items: ['WordPress', 'Shopify', 'WooCommerce', 'Drupal', 'Magento', 'HubSpot CMS']
  }
]

const experiences: Experience[] = [
  {
    company: 'Icered, Inc.',
    position: 'Staff Engineer / Tech Lead',
    period: '2025 - Present',
    description: [
      'Lead a high-performing engineering team at an innovative AI startup, driving technical strategy and architectural decisions for scalable AI-powered applications.',
      'Architect and maintain robust backend APIs using NodeJS, GraphQL, and MongoDB, ensuring high performance and reliability for production systems.',
      'Develop and maintain frontend applications using ReactJS, building responsive and interactive user interfaces for AI-powered features.',
      'Implement comprehensive API documentation standards using Postman, enabling seamless integration for frontend teams and external partners.',
      'Manage and distribute development tasks across cross-functional teams using Jira, optimizing sprint planning and delivery timelines.',
      'Design and implement DevOps infrastructure solutions using Kubernetes and Helm, reducing deployment time by 40% and improving system reliability.',
      'Establish and enforce coding standards, including comprehensive unit testing, code coverage requirements, and automated linting processes.',
      'Mentor junior and mid-level engineers, conducting code reviews and technical training sessions to elevate team capabilities.'
    ],
    technologies: ['React', 'NodeJS', 'GraphQL', 'MongoDB', 'Postman', 'Jira', 'Kubernetes', 'Helm', 'CI/CD']
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
    company: 'ANGL Marketing, Inc.',
    position: 'Full Stack Engineer',
    period: '2015 - 2017',
    description: [
      'Led development and maintenance of over 1,500 individual WordPress websites for a marketing company specializing in lead generation for local garage door repair businesses.',
      'Collaborated closely with in-house engineering team to architect scalable solutions for managing large-scale WordPress deployments across multiple client sites.',
      'Built custom WordPress plugins to extend functionality and meet specific business requirements, ensuring seamless integration with existing themes and third-party tools.',
      'Designed and developed new WordPress websites from concept to deployment, creating responsive, SEO-optimized sites that maximized lead generation and conversion rates.',
      'Developed sophisticated PHP command-line tools and automation scripts to implement features, fixes, and updates in bulk across hundreds of websites simultaneously, reducing manual deployment time by 90%.',
      'Integrated Google Sheets API within automated reporting tools to provide real-time, at-a-glance statistics and analytics dashboards for the marketing team, enabling data-driven decision making.',
      'Optimized website performance and implemented caching strategies across the WordPress network, improving page load times and user experience.',
      'Established best practices for WordPress development, including version control workflows, code review processes, and deployment pipelines.'
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'Google Sheets API', 'MySQL', 'HTML', 'CSS', 'jQuery']
  },
  {
    company: '8 Circle Media',
    position: 'PHP Developer - In-House Team Environment',
    period: '2016',
    description: [
      'Designed and built websites for high profile companies at a digital media firm located in Southern California offering services in web design and development, Graphic Design, Branding, and SEO.',
      'Wrote PHP code daily to complete miscellaneous tasks for customers, ensuring timely delivery of client requirements.',
      'Designed and implemented graphics for web pages, creating visually compelling designs that aligned with client branding.',
      'Built new features into existing websites using PHP, enhancing functionality and improving user experience.',
      'Collaborated on a team of 4 - giving and receiving feedback to improve projects and meet deadlines, maintaining high quality standards.',
      'Quickly learned and adapted to current Web Technologies required by customers, including Magento e-commerce platform.'
    ],
    technologies: ['Magento', 'PHP', 'JavaScript', 'HTML', 'CSS3', 'Adobe Photoshop CS5/CS6']
  },
  {
    company: 'All In Orbit',
    position: 'PHP Developer - In-House Team Environment',
    period: '2013',
    description: [
      'Designed and built websites for high profile companies at a digital media firm located in Southern California offering services in web design and development, music and audio, commercial video and SEO Optimization.',
      'Wrote PHP code daily to complete miscellaneous tasks for customers, ensuring efficient and reliable web applications.',
      'Designed and implemented graphics for web pages, creating engaging visual content for client websites.',
      'Built new features into existing websites using PHP, expanding functionality and improving overall site performance.',
      'Collaborated on a team of 3 - giving and receiving feedback to improve projects and meet deadlines, working closely with designers and other developers.',
      'Quickly learned and adapted to current Web Technologies required by customers, maintaining flexibility in a fast-paced environment.'
    ],
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS3', 'Adobe Photoshop CS5/CS6', 'Mac OS X', 'Bandcamp']
  },
  {
    company: 'EXGF CULTURE',
    position: 'PHP Developer - In-House Team Environment',
    period: '2011 - 2016',
    description: [
      'Oversaw management of web projects for a collective of creative people working together to establish smaller companies in areas of Music, Web and Graphic Design, and PR.',
      'Designed and built websites for high profile companies, ensuring professional quality and modern design standards.',
      'Wrote PHP code daily to complete miscellaneous tasks for customers, maintaining and enhancing existing web applications.',
      'Designed and implemented graphics for web pages using Adobe Photoshop, creating visually appealing and user-friendly interfaces.',
      'Built new features into existing websites using PHP, Javascript, and many other technologies, improving functionality and user experience.',
      'Collaborated on a team of 15 - giving and receiving feedback to improve projects and meet deadlines, fostering a productive team environment.',
      'Quickly learned and adapted to current Web Technologies required by customers, staying current with industry trends and best practices.'
    ],
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS3', 'Adobe Photoshop CS5/CS6', 'Mac OS X', 'Bandcamp']
  }
]

const projects: Project[] = [
  {
    title: 'Marketing Service',
    description: 'A NodeJS App that serves as a webhook endpoint for Automation Workflows and CRMs. This project was used as the destination for form submissions from frontend landing pages.',
    features: [
      'Organizes and cleans form submissions from landing pages',
      'Sends data to multiple registered CRMs per client (Hubspot, Jobber, Close.io, etc.)',
      'Triggers Twilio workflows to send SMS to leads upon form submission',
      'Enrolls leads into AI agent chatbot conversations automatically'
    ],
    technologies: ['NodeJS', 'Twilio', 'HubSpot CMS', 'Close.io']
  },
  {
    title: 'Streaming Service',
    description: 'A full-stack application with ReactJS frontend and NodeJS backend for Live Streaming from one video source to Live HLS video streams. The service utilizes a CDN to distribute streams.',
    features: [
      'Frontend built with ReactJS providing an intuitive interface for managing and viewing live streams',
      'Uses GStreamer to download and transcode video streams from source m3u8 playlists',
      'Creates multiple quality renditions: 4K, 1080p, 720p, 480p, and 320p',
      'Supports GPU hardware encoding for optimal performance',
      'Generates perfectly segmented MPEG-TS files at any time frame interval'
    ],
    technologies: ['React', 'NodeJS', 'GStreamer', 'HLS', 'AWS']
  },
  {
    title: 'Social Media Ionic App',
    description: 'A Hybrid app with ReactJS frontend built on top of the Ionic framework. Uses Capacitor to bridge JavaScript with native Swift (iOS) and Java (Android) code, while remaining compatible with web browsers.',
    features: [
      'E2E Messaging with Group Chat and Direct Messaging support',
      'Social Posts with reactions, comments, upvoting, sharing, and notifications',
      'Account Settings for privacy, Dark Mode, and notification preferences',
      'Push Notifications and Alerts center',
      'Native camera support via custom Swift/Java implementations exposed through Capacitor',
      'Multi-account switching support',
      'HLS VOD Streaming with AWS S3, MediaConvert, and Lambda for video processing',
      'Video Conferencing using MediaSoup with WebRTC protocol'
    ],
    technologies: ['Ionic', 'React', 'TypeScript', 'Capacitor', 'Swift', 'Java', 'AWS S3', 'AWS MediaConvert', 'Lambda', 'MediaSoup', 'WebRTC', 'HLS']
  },
  {
    title: 'WordPress Bulk Management System',
    description: 'A comprehensive WordPress management system for a marketing company specializing in lead generation for local garage door repair businesses. Built and maintained over 1,500 individual WordPress websites.',
    features: [
      'Built and maintained over 1,500 individual WordPress websites',
      'Developed custom WordPress plugins to extend functionality and meet business requirements',
      'Designed and built new WordPress websites from concept to deployment',
      'Created PHP command-line tools to implement features and fixes in bulk across hundreds of websites simultaneously',
      'Integrated Google Sheets API within automated reporting tools for real-time statistics and analytics dashboards',
      'Collaborated with in-house engineering team to architect scalable solutions for large-scale WordPress deployments'
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'Google Sheets API', 'MySQL', 'HTML', 'CSS', 'jQuery']
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
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0) // First item open by default
  const [openProjectAccordion, setOpenProjectAccordion] = useState<number | null>(0) // First project open by default
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const toggleProjectAccordion = (index: number) => {
    setOpenProjectAccordion(openProjectAccordion === index ? null : index)
  }

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
      {/* Animated Background */}
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
            <motion.span 
              className="greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, my name is
            </motion.span>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Devontrae Walls.
            </motion.h1>
            
            <motion.h2 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I build things for the web.
            </motion.h2>
            
            <motion.div 
              className="hero-description-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="hero-description">
                I'm a <strong>Senior Full-Stack Developer</strong> specializing in building exceptional digital experiences.
              </p>
              <p className="hero-description">
                Currently focused on <strong>Wordpress</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>NextJs</strong>, <strong>NodeJs</strong>, and <strong>Infrastructure</strong> with over <strong>14 years</strong> of experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
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
            Skills & Technologies
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
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="skill-category-title">{skill.category}</h3>
                <div className="skill-tags">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span 
                      key={itemIndex} 
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                    >
                      <span className="skill-icon">{getTechIcon(item)}</span>
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
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
            Featured Projects
          </motion.h2>
          <motion.div 
            className="projects-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className={`project-card ${openProjectAccordion === index ? 'active' : ''}`}
                variants={itemVariants}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
            <span className="title-number">03.</span>
            Where I've Worked
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
                className={`experience-card ${openAccordion === index ? 'active' : ''}`}
                variants={itemVariants}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
            <span className="title-number">04.</span>
            Volunteer Experience
          </motion.h2>
          <motion.div 
            className="experience-card"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            <span className="title-number">05.</span>
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
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>(213) 294-9698</span>
              </motion.a>
              <motion.a 
                href="mailto:devontrae@gmail.com" 
                className="contact-item"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>devontrae@gmail.com</span>
              </motion.a>
              <motion.div 
                className="contact-item contact-location"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Memphis, TN</span>
              </motion.div>
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
