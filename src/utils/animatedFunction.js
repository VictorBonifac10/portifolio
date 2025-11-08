export function animatedFunction() {

    const container = document.getElementById('animated-text');

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

};

export function animatedTechFunction() {

    const container = document.getElementById('animated-tech');

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

};