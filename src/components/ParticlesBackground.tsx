import { memo } from 'react'
import Particles from '@tsparticles/react'

const staticParticlesOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  pauseOnBlur: false,
  pauseOnOutsideViewport: false,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: {
        enable: false,
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: [
        "#64ffda",
        "#ccd6f6",
        "#8892b0",
        "#a8b2d1",
        "#233554",
      ],
    },
    links: {
      color: {
        value: [
          "#64ffda",
          "#ccd6f6",
          "#8892b0",
        ],
      },
      distance: 150,
      enable: true,
      opacity: 0.6,
      width: 1.5,
      triangles: {
        enable: true,
        opacity: 0.1,
      },
      shadow: {
        enable: true,
        blur: 5,
        color: {
          value: [
            "#64ffda",
            "#ccd6f6",
          ],
        },
        offset: {
          x: 0,
          y: 0,
        },
      },
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: {
        default: "bounce" as const,
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.6,
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
        destroy: "none" as const,
        startValue: "random" as const,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 4 },
      animation: {
        enable: true,
        speed: 2,
        sync: false,
        destroy: "none" as const,
        startValue: "random" as const,
      },
    },
    shadow: {
      enable: true,
      blur: 5,
      color: {
        value: [
          "#64ffda",
          "#ccd6f6",
          "#8892b0",
        ],
      },
      offset: {
        x: 0,
        y: 0,
      },
    },
  },
  detectRetina: true,
}

export const ParticlesBackground = memo(() => {
  return (
    <Particles
      id="tsparticles"
      className="particles-container"
      options={staticParticlesOptions}
    />
  )
}, () => true)

ParticlesBackground.displayName = 'ParticlesBackground'

