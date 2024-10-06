function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function start() {
  const play = document.querySelector(".play");
  const container = document.querySelector(".container");
  
  play.style.display = "none"; 
  container.style.display = "flex";
  
  const audio = new Audio("/audio/home/clickSound.wav");
  audio.play();
}

function hoverSound() {
  const audio = new Audio("/audio/home/hoverSound.wav");
  audio.play();
}

function generateStars() {
  const STAR_COUNT = 400;
  let stars = "";
  for (let i = 0; i < STAR_COUNT; i++) {
      stars += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`;
  }
  console.log(stars.substring(0, stars.length - 1));
}

generateStars();
