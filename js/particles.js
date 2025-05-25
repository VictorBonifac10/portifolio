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
      value: "#949899" // cor das partículas
    },
    opacity: {
      value: 0.2 // opacidade das partículas
    },
    links: {
      enable: true,
      distance: 150,
      color: "#949899", // cor das linhas de conexão
      opacity: 0.2 // opacidade das linhas
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
