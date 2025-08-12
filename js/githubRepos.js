const username = "VictorBonifac10";
const container = document.getElementById("github-projects");

const reposDesejados = ["car-shop-landing-page", "calculadora", "dev-sorteio", "menu-online", "conversor-monetario", "nike-landing-page"];

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos
      .filter(repo => reposDesejados.includes(repo.name)) // repo especificos
      .forEach(repo => { 
        const card = document.createElement("div");
        card.classList.add("repo-card");

        card.innerHTML = `
          <h4>${repo.name}</h4>
          <p>${repo.description || "Repositório sem descrição."}</p>
          <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
        `;

        container.appendChild(card);
      });
  })
  .catch(error => {
    container.innerHTML = "<p>Erro ao carregar repositórios.</p>";
    console.error("Erro ao buscar repositórios:", error);
  });
