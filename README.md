# Devontrae Walls - Portfolio Website

A modern, responsive portfolio website showcasing the work and experience of Devontrae Walls, a Senior Full-Stack Developer with over 14 years of experience in web development.

## 🚀 Features

- **Animated Hero Section** - Eye-catching introduction with smooth animations using Framer Motion
- **Interactive Particle Background** - Dynamic particle effects using tsparticles
- **Skills Showcase** - Organized display of technical skills across multiple categories
- **Project Portfolio** - Detailed showcase of major projects with technologies and features
- **Professional Experience** - Comprehensive work history with accordion-style details
- **Volunteer Work** - Teaching and mentorship experience
- **Contact Section** - Easy-to-use contact information with clickable links
- **Responsive Design** - Fully responsive layout that works on all devices
- **Smooth Scrolling** - Animated scroll-to-top button and smooth section navigation
- **Scroll Animations** - AOS (Animate On Scroll) library for engaging scroll-triggered animations
- **Modern UI/UX** - Beautiful gradient backgrounds, hover effects, and modern design patterns

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Animation & Effects
- **Framer Motion** - Advanced animations and transitions
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **tsparticles** - Interactive particle background effects

### Styling
- **CSS3** - Custom styling with modern CSS features
- **Inter Font** - Google Fonts integration

### Icons & Assets
- **React Icons** - Icon library
- **Simple Icons** - Technology brand icons

## 📁 Project Structure

```
vont-portfolio/
├── public/
│   ├── logo.png
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── profile.jpg
│   │   └── react.svg
│   ├── components/
│   │   ├── Contact.tsx          # Contact section with phone, email, location
│   │   ├── Experience.tsx       # Work experience with accordion
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Hero.tsx             # Hero section with profile and intro
│   │   ├── Navbar.tsx           # Navigation bar with mobile menu
│   │   ├── ParticlesBackground.tsx  # Particle animation background
│   │   ├── Projects.tsx         # Project showcase with accordion
│   │   ├── ScrollToTop.tsx      # Scroll to top button
│   │   ├── Skills.tsx           # Skills display by category
│   │   └── Volunteer.tsx        # Volunteer experience section
│   ├── constants/
│   │   └── techColors.ts        # Technology color mappings
│   ├── data/
│   │   ├── experiences.ts       # Work experience data
│   │   ├── projects.ts          # Project data
│   │   ├── skills.ts            # Skills data by category
│   │   └── volunteer.ts         # Volunteer experience data
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── utils/
│   │   └── getTechIcon.tsx      # Utility for technology icons
│   ├── App.tsx                  # Main application component
│   ├── App.css                  # Application styles
│   ├── index.css                # Global styles
│   └── main.tsx                 # Application entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vont-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Portfolio Sections

### 1. About (Hero)
- Professional introduction
- Profile photo with animated effects
- Call-to-action button
- Smooth scroll-based opacity and scale animations

### 2. Skills
- Organized by categories:
  - Languages & Frameworks
  - Styling & UI Libraries
  - Databases & APIs
  - DevOps & Infrastructure
  - Tools & CI/CD
  - CMS

### 3. Projects
- Marketing Service (NodeJS webhook system)
- Streaming Service (React + NodeJS HLS streaming)
- Social Media Ionic App (Hybrid mobile app)
- WordPress Bulk Management System (1,500+ sites)

### 4. Experience
- Detailed work history from 2011 to present
- Accordion-style expandable sections
- Technologies used for each position
- Companies: Icered, Achieve, Alpha Centauri, Medik8 Mobile, and more

### 5. Volunteer
- Web Development Instructor at Mr Book's Academy (2017-2019)

### 6. Contact
- Phone: (213) 294-9698
- Email: devontrae@gmail.com
- Location: Memphis, TN

## 🎯 Key Features Implementation

### Animations
- **Framer Motion**: Used throughout for smooth component animations, hover effects, and page transitions
- **AOS**: Scroll-triggered animations for section reveals
- **Scroll Transform**: Hero section opacity and scale based on scroll position

### Performance Optimizations
- Throttled scroll handlers using `requestAnimationFrame`
- Passive event listeners for better scroll performance
- Lazy loading of particle engine
- Optimized re-renders with React hooks

### Responsive Design
- Mobile-first approach
- Collapsible mobile navigation menu
- Responsive typography and spacing
- Touch-friendly interactive elements

## 🔧 Configuration

### TypeScript
- Strict type checking enabled
- Separate configs for app and node environments
- Path aliases configured (if needed)

### Vite
- React plugin for Fast Refresh
- Optimized build configuration
- Development server with HMR

### ESLint
- Modern ESLint flat config
- React hooks and refresh plugins
- TypeScript-aware linting

## 📝 Customization

To customize the portfolio for your own use:

1. **Update Personal Information**:
   - Edit `src/components/Hero.tsx` for name and title
   - Replace `src/assets/profile.jpg` with your photo
   - Update `src/components/Contact.tsx` with your contact details

2. **Update Experience**:
   - Edit `src/data/experiences.ts` with your work history

3. **Update Projects**:
   - Edit `src/data/projects.ts` with your projects

4. **Update Skills**:
   - Edit `src/data/skills.ts` with your technical skills

5. **Update Volunteer Work**:
   - Edit `src/data/volunteer.ts` with your volunteer experience

6. **Styling**:
   - Customize colors and styles in `src/App.css` and `src/index.css`

## 🌐 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

Build for production:
```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Devontrae Walls**
- Email: devontrae@gmail.com
- Phone: (213) 294-9698
- Location: Memphis, TN

---

Built with ❤️ using React, TypeScript, and Vite
