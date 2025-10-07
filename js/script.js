// --> Imports

import { projects } from './data.js';

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

// --> projects

const projectField = document.querySelector('.project-field')
const btnAll = document.querySelector('#all');
const btnFull = document.querySelector('#full-stack');
const btnFront = document.querySelector('#front-end');
const btnBack = document.querySelector('#back-end');

function renderProjects(list) {

  projectField.innerHTML = '';

  list.forEach(element => {
    const stacks = element.stacks.map(stack => `
      <p class="text-[10px] text-amber-500 bg-amber-600/20 p-2 border-1 border-amber-600 rounded-md items-center justify-center">${stack}</p>
    `).join('');

    projectField.innerHTML += `
      <article class="flex flex-col gap-3 w-full max-w-[390px] min-h-[150px] border-1 border-white/10 bg-gray-500/20 rounded-2xl hover:rounded-none hover:border-amber-400 hover:bg-amber-500/10 hover:scale-105 transition-all overflow-hidden">
          <img src="${element.src}" alt="projeto"
              class="w-auto sm:w-[150px] flex-shrink-0 object-cover">
          <div class="flex flex-col justify-between flex-1 min-w-0 h-full p-3 pt-1 gap-2">
              <h5 class="text-amber-400 font-semibold text-lg leading-tight">${element.name}</h5>
              <p class="textToggle text-[13px] text-gray-300 mb-2">
                  ${element.description}
              </p>
              <div class="flex flex-wrap gap-1">
                  ${stacks}
              </div>
              <div class="technologies flex gap-3 mt-2 text-2xl text-amber-400">
                  <a href="${element.repository}" target="_blank" class="flex-shrink-0"><i class="ri-github-fill" data-tooltip="Github"></i></a>
              ${element.site ?
                      `<a href="${element.site}" target="_blank" class="flex-shrink-0">
                                  <i class="ri-link" data-tooltip="Site"></i>
                              </a>`
                      : ''}
              </div>
          </div>
      </article>
    `;
  });
}

function filterProjects(field) {
  if (field === 'Todos') {
    renderProjects(projects);
  } else {
    const filtered = projects.filter(element => element.field === field);
    renderProjects(filtered);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  filterProjects('Todos');
});

btnAll.addEventListener('click', () => filterProjects('Todos'));
btnFull.addEventListener('click', () => filterProjects('Full-Stack'));
btnFront.addEventListener('click', () => filterProjects('Front-End'));
btnBack.addEventListener('click', () => filterProjects('Back-End'));





