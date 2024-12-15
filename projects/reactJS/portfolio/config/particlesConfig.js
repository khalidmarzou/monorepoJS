const particlesConfig = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      push: {
        distance: 200,
        duration: 15,
      },
      grab: {
        distance: 150,
      },
    },
  },
  particles: {
    color: {
      value: "#FFFFFF",
    },
    links: {
      color: "#FFFFFF",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 150,
    },
    opacity: {
      value: 1.0,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
  background: {
    color: {
      value: "#50a3a2",
    },
    image: "linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%)", // Gradient background
    position: "fixed",
    size: "100% 100%",
    repeat: "no-repeat",
  },
};

export default particlesConfig;
