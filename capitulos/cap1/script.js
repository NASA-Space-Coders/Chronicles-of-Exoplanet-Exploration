function myFunction(x) {
    x.classList.toggle("change");
  }

// Variáveis globais para controle dos slides
let currentSlide = 0;  // Índice do slide atual
const totalSlides = 5;  // Número total de slides (modifique conforme o número real)


const slides = [
    
    {   
        image: '/capitulos/cap1/cap1Midia/imagem1.png',
        text: 'Exoplanetas são como mundos mágicos que orbitam estrelas bem distantes do nosso Sol. Pense neles como planetas que moram em outras casinhas no céu!',
    },

    {   
        image: '/capitulos/cap1/cap1Midia/imagem3.png',
        text: 'Esses planetas podem ser super quentes, frios como gelo, gasosos como Júpiter ou rochosos como a Terra. Cada um é diferente, com suas próprias surpresas!',
    }, 
    {   
        image: '/capitulos/cap1/cap1Midia/imagem2.png',
        text: 'O mais incrível é que, em alguns desses exoplanetas, pode até existir água e, quem sabe, vida! Eles são mistérios esperando para serem descobertos!',
    },
];

function changeSlide(direction) {
    // Atualiza o slide atual
    currentSlide += direction;
  
    // Verifica se o índice está fora dos limites e faz um loop
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
  
    // Altera o background da div e o texto do balão
    document.getElementById('planet-box').style.backgroundImage = `url(${slides[currentSlide].image})`;
    document.getElementById('bubble-text').innerHTML = `<p>${slides[currentSlide].text}</p>`;
}
  
// Inicializa o primeiro slide como background
document.getElementById('planet-box').style.backgroundImage = `url(${slides[0].image})`;
  