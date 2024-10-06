// js/home.js

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const STAR_COUNT = 400
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`
}
console.log(result.substring(0, result.length - 1))



// Função para iniciar o jogo
function start() {
  const play = document.querySelector(".play");
  const container = document.querySelector(".container");
  
  play.style.display = "none"; // Esconde o botão play
  container.style.display = "flex"; // Mostra os capítulos
  
  const audio = new Audio("/audio/home/clickSound.wav");
  audio.play(); // Reproduz som de clique ao iniciar
}

// Função para som ao passar o mouse
function hoverSound() {
  const audio = new Audio("/audio/home/hoverSound.wav");
  audio.play(); // Reproduz som ao passar o mouse no botão de iniciar
}

// Background dinâmico de estrelas
function generateStars() {
  const STAR_COUNT = 400;
  let stars = "";
  for (let i = 0; i < STAR_COUNT; i++) {
      stars += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`;
  }
  console.log(stars.substring(0, stars.length - 1)); // Verifique o estilo de estrelas no console
}

generateStars();
