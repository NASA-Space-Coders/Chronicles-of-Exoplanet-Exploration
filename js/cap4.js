function myFunction(x) {
    x.classList.toggle("change");
  }

// Variáveis globais para controle dos slides
let currentSlide = 0;  // Índice do slide atual
const totalSlides = 5;  // Número total de slides (modifique conforme o número real)

// Aqui podem ser adicionados novos slides, alterando a imagem e texto
const slides = [
    
    {   
        image: 'img/cap4/cap4img1.png',
        text: 'A água é como o ‘suco da vida’ para um exoplaneta! Onde tem água líquida, pode haver vida crescendo e se espalhando.',
    },

    {   
        image: 'img/cap4/cap4img2.png',
        text: 'Ela refresca o planeta, ajudando a regular a temperatura, como um cobertor que mantém tudo no ponto certo, nem muito quente, nem muito frio!',
    }, 
    {   
        image: 'img/cap4/cap4img2.png',
        text: 'Além disso, a água é o lugar perfeito para as primeiras formas de vida aparecerem, como uma piscina mágica onde os seres podem começar a nadar e crescer!',
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
  