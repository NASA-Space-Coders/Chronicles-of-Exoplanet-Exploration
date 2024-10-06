let currentSlide = 0; 
const totalSlides = 5;

const slides = [
    
    {   
        image: 'img/cap1/imagem1.png',
        text: 'Exoplanetas são como mundos mágicos que orbitam estrelas bem distantes do nosso Sol. Pense neles como planetas que moram em outras casinhas no céu!',
    },

    {   
        image: 'img/cap1/imagem3.png',
        text: 'Esses planetas podem ser super quentes, frios como gelo, gasosos como Júpiter ou rochosos como a Terra. Cada um é diferente, com suas próprias surpresas!',
    }, 
    {   
        image: 'img/cap1/imagem2.png',
        text: 'O mais incrível é que, em alguns desses exoplanetas, pode até existir água e, quem sabe, vida! Eles são mistérios esperando para serem descobertos!',
    },
    {
        image: 'img/cap1/curiosidade1.jpg',
        text: 'Fato curioso! O planeta Kepler-46b é um gigante gasoso, 1,907 vezes mais massivo que a Terra, localizado a 239 quintilhões de quilômetros de distância, com uma temperatura de 543 kelvins.'
    }
];

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
        window.location.assign('cap2.html')
    }

    document.getElementById('planet-box').style.backgroundImage = `url(${slides[currentSlide].image})`;
    document.getElementById('bubble-text').innerHTML = `<p>${slides[currentSlide].text}</p>`;
}
  
document.getElementById('planet-box').style.backgroundImage = `url(${slides[0].image})`;
  