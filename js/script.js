let dark = false
const back = document.querySelector("body")
const log = document.querySelector("#logo")
const nameLogo = document.querySelector("#name")
const linkHeader = document.querySelectorAll(".link-top-header")
const botao = document.querySelector("#dark-light")
const img = document.querySelector("#img-darklight")
const paragraph = document.querySelector("p")
const subTitle = document.querySelector("#subtitle")
const titlePrincipal = document.querySelector("#element")
const iconSocial = document.querySelectorAll(".box")
const myPhoto = document.querySelector("#photo-img")
const aboutMe = document.querySelector("#paragraph-me")
const workMe = document.querySelectorAll(".work")
const arrowIcon = document.querySelectorAll(".arrow")


function darkMode() {
    if (dark === false) {
        //liga o modo escuro

        back.style.background = "#272737" //background

        log.src = "./assets/img/yellow-logo.svg" //logo
        nameLogo.style.color = "#fff"

        linkHeader.forEach(linkHeader => { //header
            linkHeader.style.color = "#ffdf56"
        });

        botao.style.color = "#fff"
        botao.style.border = "1.5px solid #ffdf56"
        botao.innerHTML = '<i class="ri-sun-fill"></i>'

        img.src = "./assets/img/yellow-rocket.svg" //img

        paragraph.style.color = "#fff" //textos
        subTitle.style.color = "#fff"
        element.style.color = "#ffdf56"

        iconSocial.forEach(iconSocial => { //icones
            iconSocial.style.background = "#ffdf56"
        });

        aboutMe.style.color = "#fff"
        myPhoto.style.border = "20px solid #ffdf56"

        workMe.src = "./assets/img/yellow-job.svg" //logo
        arrowIcon.src = "./assets/img/yellow-arrow.svg" //logo

        workMe.forEach(work => {
            work.src = "./assets/img/yellow-job.svg" //logo          
        });

        arrowIcon.forEach(arrow => {
            arrow.src = "./assets/img/yellow-arrow.svg" //logo
        });

        dark = true; // agora estamos no modo claro

    } else {
        // VOLTA para o modo claro
        back.style.backgroundColor = "#ffffff";
        log.src = "./assets/img/blue-logo.svg";
        nameLogo.style.color = "#3c3c54";

        linkHeader.forEach(link => {
            link.style.color = "#0059ad";
        });

        botao.style.color = "#3c3c54"
        botao.style.border = "1.5px solid #0059ad"
        botao.innerHTML = '<i class="ri-moon-fill"></i>'

        img.src = "./assets/img/blue-rocket.svg";

        paragraph.style.color = "#3c3c54";
        subTitle.style.color = "#3c3c54";
        titlePrincipal.style.color = "#0059ad";

        iconSocial.forEach(icon => {
            icon.style.backgroundColor = "#0059ad";
        });

        aboutMe.style.color = "#000"
        myPhoto.style.border = "20px solid #0059ad"

        workMe.forEach(work => {
            work.src = "./assets/img/blue-job.svg" //logo          
        });

        arrowIcon.forEach(arrow => {
            arrow.src = "./assets/img/blue-arrow.svg" //logo
        });

        dark = false; // agora estamos no modo escuro
    }

}

const container = document.getElementById('iconCarousel');
let scrollSpeed = 1; // pixels por passo
let intervalTime = 5; // milissegundos por passo

function autoScroll() {
    container.scrollBy({
        left: scrollSpeed,
        behavior: 'smooth'
    });

    // Verifica se chegou ao final e volta ao início (loop)
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

// Começa o scroll automático
setInterval(autoScroll, intervalTime);


