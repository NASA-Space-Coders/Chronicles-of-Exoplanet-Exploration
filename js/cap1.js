function myFunction(x) {
    x.classList.toggle("change");
  }

// Variáveis globais para controle dos slides
let currentSlide = 0;  // Índice do slide atual
const totalSlides = 5;  // Número total de slides (modifique conforme o número real)

// Aqui podem ser adicionados novos slides, alterando a imagem e texto
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
];

function changeSlide(direction) {
    // Atualiza o slide atual
    currentSlide += direction;

    // Verifica se o índice está fora dos limites e faz um loop
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0
        window.location.assign('cap2.html')
    }

    // Altera o background da div e o texto do balão
    document.getElementById('planet-box').style.backgroundImage = `url(${slides[currentSlide].image})`;
    document.getElementById('bubble-text').innerHTML = `<p>${slides[currentSlide].text}</p>`;

    // Verifica se é o último slide para mostrar o botão
    if (currentSlide === slides.length - 1) {
        document.getElementById('next-chapter-button').style.display = 'block';
    } else {
        document.getElementById('next-chapter-button').style.display = 'none';
    }
}
  
// Inicializa o primeiro slide como background
document.getElementById('planet-box').style.backgroundImage = `url(${slides[0].image})`;
  