tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "transparent" // fundo totalmente transparente
    }
  },
  particles: {
    number: {
      value: 50
    },
    color: {
      value: "#333333" // cor das partículas
    },
    opacity: {
      value: 0.3 // opacidade das partículas
    },
    links: {
      enable: true,
      distance: 150,
      color: "#333333", // cor das linhas de conexão
      opacity: 0.3 // opacidade das linhas
    },
    move: {
      enable: true,
      speed: 1
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 3
    }
  }
});
