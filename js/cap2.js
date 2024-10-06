function myFunction(x) {
    x.classList.toggle("change");
  }

// Variáveis globais para controle dos slides
let currentSlide = 0;  // Índice do slide atual
const totalSlides = 5;  // Número total de slides (modifique conforme o número real)

// Aqui podem ser adicionados novos slides, alterando a imagem e texto
const slides = [
    
    {   
        image: 'img/cap2/cap2img1.png',
        text: 'A luz de uma estrela é como o "abraço quentinho" que um exoplaneta recebe! Ela ajuda a manter o planeta aquecido e pode até permitir que tenha água líquida.',
    },

    {   
        image: 'img/cap2/cap2img2.png',
        text: 'Sem a luz da estrela, muitos exoplanetas seriam escuros e gelados. A luz é o que dá energia para o planeta, como um farol guiando a vida!',
    }, 
    {   
        image: 'img/cap2/cap2img2.png',
        text: 'A luz também nos ajuda a descobrir mais sobre esses mundos distantes. Quando a luz de uma estrela passa pelo exoplaneta, podemos descobrir se ele tem uma atmosfera ou até sinais de vida!',
    },
];

function changeSlide(direction) {
    // Atualiza o slide atual
    currentSlide += direction;

    // Verifica se o índice está fora dos limites e faz um loop
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        window.location.assign('cap3.html')
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
  