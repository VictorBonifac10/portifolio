export function carouselFunction() {

    const container = document.getElementById('animatedText');
    const containerTechIcons = document.getElementById('animatedTechIcons');

    const originalContent = container.innerHTML;
    const techIconsContent = containerTechIcons.innerHTML;

    container.innerHTML += originalContent;
    containerTechIcons.innerHTML += techIconsContent;

    let scrollSpeed = 1; // px por passo
    let intervalTime = 35; // velocidade

    function autoScroll() {
        container.scrollLeft += scrollSpeed;
        containerTechIcons.scrollLeft += scrollSpeed;

        if (container.scrollLeft >= container.scrollWidth / 2) { //volta para o início
            container.scrollLeft = 0;
        }

        if (containerTechIcons.scrollLeft >= containerTechIcons.scrollWidth / 2) { //volta para o início
            containerTechIcons.scrollLeft = 0;
        }
    }

    setInterval(autoScroll, intervalTime);

};
