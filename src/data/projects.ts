import type { Project } from '../types'

// ResumeIQHub images
import resumeIQHub1 from '../assets/ResumeIQHub/Screenshot 2026-01-15 140042.png'
import resumeIQHub2 from '../assets/ResumeIQHub/Screenshot 2026-01-15 140212.png'
import resumeIQHub3 from '../assets/ResumeIQHub/Screenshot 2026-01-15 140239.png'
import resumeIQHub4 from '../assets/ResumeIQHub/Screenshot 2026-01-15 140300.png'
import resumeIQHub5 from '../assets/ResumeIQHub/Screenshot 2026-01-15 140333.png'

// TechEventX images
import techEventX1 from '../assets/TechEventX/Screenshot 2026-01-15 133832.png'
import techEventX2 from '../assets/TechEventX/Screenshot 2026-01-15 133909.png'
import techEventX3 from '../assets/TechEventX/Screenshot 2026-01-15 134122.png'
import techEventX4 from '../assets/TechEventX/Screenshot 2026-01-15 134156.png'
import techEventX5 from '../assets/TechEventX/Screenshot 2026-01-15 134225.png'
import techEventX6 from '../assets/TechEventX/Screenshot 2026-01-15 134305.png'

// ZM Collection images
import zmCollection1 from '../assets/ZM Collection/Screenshot 2026-01-15 134831.png'
import zmCollection2 from '../assets/ZM Collection/Screenshot 2026-01-15 134908.png'
import zmCollection3 from '../assets/ZM Collection/Screenshot 2026-01-15 134931.png'
import zmCollection4 from '../assets/ZM Collection/Screenshot 2026-01-15 134950.png'
import zmCollection5 from '../assets/ZM Collection/Screenshot 2026-01-15 135016.png'
import zmCollection6 from '../assets/ZM Collection/Screenshot 2026-01-15 135109.png'
import zmCollection7 from '../assets/ZM Collection/Screenshot 2026-01-15 135150.png'

export const projects: Project[] = [
  {
    title: 'TechEventX',
    description: 'A full-stack event management SaaS platform built with Next.js 16, React 19, and TypeScript. The platform connects tech enthusiasts with events while providing comprehensive tools for organizers and administrators.',
    features: [
      'Multi-role system (Users, Organizers, Admins) with role-based access control',
      'Event discovery, booking, and digital ticket management with QR codes',
      'Organizer dashboard with analytics, team management, and subscription plans',
      'Admin panel with real-time analytics, user management, and financial tracking',
      'Payment integration with Stripe and PayMongo'
    ],
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Zustand', 'TanStack React Query', 'TanStack React Table', 'Radix UI', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Stripe', 'PayMongo', 'Cloudinary', 'SendGrid', 'Mailgun', 'jsPDF', 'PDFKit', 'qrcode', 'Sharp', 'Recharts'],
    images: [techEventX1, techEventX2, techEventX3, techEventX4, techEventX5, techEventX6]
  },
  {
    title: 'ResumeIQHub',
    description: 'A full-stack, production-ready recruitment SaaS platform that seamlessly connects recruiters and job seekers in a unified ecosystem.',
    features: [
      'AI-powered resume builder with 16+ professional templates',
      '20+ AI features including content enhancement, grammar checking, skill extraction, and resume parsing',
      'Job discovery with personalized recommendations',
      'Application tracking with real-time status updates',
      'Interview scheduling and management',
      'Direct messaging with recruiters',
      'Resume analytics (views, downloads)'
    ],
    technologies: ['React 19', 'Redux Toolkit', 'React Router', 'Vite', 'Tailwind CSS', 'Socket.io', 'Node.js', 'Express.js 5', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Google Gemini AI', 'Cloudinary', 'SendGrid', 'jsPDF', 'html2canvas', 'Recharts', 'node-cron'],
    images: [resumeIQHub1, resumeIQHub2, resumeIQHub3, resumeIQHub4, resumeIQHub5]
  },
  {
    title: 'ZM Collection',
    description: 'Modern e-commerce platform built with Next.js 16 & TypeScript for beauty products and fashion collections.',
    features: [
      'Fully responsive design optimized for all devices',
      'Shopping cart with localStorage persistence',
      'Product catalog with detailed pages',
      'Collections management system',
      'Dark/light theme toggle',
      'Comprehensive admin dashboard with analytics, real-time sales metrics, order management, product/collection CRUD operations, customer management, and low stock alerts'
    ],
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Radix UI', 'React Context API', 'Lucide React', 'PostCSS', 'Unsplash', 'Google Fonts'],
    images: [zmCollection1, zmCollection2, zmCollection3, zmCollection4, zmCollection5, zmCollection6, zmCollection7]
  },
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

