AOS.init();

// --> darkmode/lightmode

let light = false; // start dark
const btnLightMode = document.querySelectorAll(".light-mode");
const body = document.querySelector("body");
const textToggle = document.querySelectorAll(".textToggle"); // apenas esses mudam

// colors
const blackSoft = "#1F1F1E";
const whiteSoft = "#ffffff";
const lightBg = "#f5f5f5";
const darkBg = "#020202";

btnLightMode.forEach(element => {
  element.addEventListener('click', lightMode)
});

function lightMode() {

    if (!light) {
        // dark → light
        body.style.background = lightBg;
        textToggle.forEach(element => element.style.color = blackSoft);
        btnLightMode.innerHTML = `<i class="ri-moon-fill text-lg text-white"></i>`

        light = true;
    } else {
        // light → dark
        body.style.background = darkBg;
        textToggle.forEach(element => element.style.color = whiteSoft);
        btnLightMode.innerHTML = `<i class="ri-sun-fill text-lg text-white"></i>`

        light = false;
    }
}

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



