import type { Project } from '../types'

export const projects: Project[] = [
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

