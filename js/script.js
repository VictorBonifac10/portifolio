AOS.init();


// --> darkmode/lightmode

let light = false; // começa no escuro
const btnLightMode = document.querySelector("#light-mode");
const body = document.querySelector("body");
const textToggle = document.querySelectorAll(".textToggle"); // apenas esses mudam

// cores
const blackSoft = "#1F1F1E";
const whiteSoft = "#ffffff";
const lightBg = "#f5f5f5";
const darkBg = "#020202";

function lightMode() {
    if (!light) {
        // Escuro → Claro
        body.style.background = lightBg;
        textToggle.forEach(el => el.style.color = blackSoft);

        light = true;
    } else {
        // Claro → Escuro
        body.style.background = darkBg;
        textToggle.forEach(el => el.style.color = whiteSoft);

        light = false;
    }
}

btnLightMode.addEventListener("click", lightMode);


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



