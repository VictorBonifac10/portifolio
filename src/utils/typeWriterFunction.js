import Typewriter from 'typewriter-effect/dist/core';

export function typeWriterFunction() {

  new Typewriter('#typeWriter', {

    strings: ['Bem-vindo ao meu portfólio'],
    autoStart: true,
    loop: true,
    delay: 85,

  });

}