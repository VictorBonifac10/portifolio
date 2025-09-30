AOS.init();

// --> darkmode/lightmode
const btns = document.querySelectorAll('.light-mode');
const body = document.body;

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // atualizar ícone do botão (se quiser)
    btn.innerHTML = body.classList.contains('light-mode')
      ? '<i class="ri-moon-fill text-lg textToggleNav"></i>'
      : '<i class="ri-sun-fill text-lg textToggleNav"></i>';
  });
});

// --> carousel

const container = document.getElementById('iconCarousel');

const originalContent = container.innerHTML;
container.innerHTML += originalContent;

let scrollSpeed = 1; // px por passo
let intervalTime = 35; // velocidade

function autoScroll() {
  container.scrollLeft += scrollSpeed;

  if (container.scrollLeft >= container.scrollWidth / 2) { //volta para o início
    container.scrollLeft = 0;
  }
}

setInterval(autoScroll, intervalTime);

// --> nav fixed

window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



