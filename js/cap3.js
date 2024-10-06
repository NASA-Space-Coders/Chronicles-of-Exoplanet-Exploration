function myFunction(x) {
    x.classList.toggle("change");
  }

// Variáveis globais para controle dos slides
let currentSlide = 0;  // Índice do slide atual
const totalSlides = 5;  // Número total de slides (modifique conforme o número real)

// Aqui podem ser adicionados novos slides, alterando a imagem e texto
const slides = [
    
    {   
        image: 'img/cap3/cap3img1.png',
        text: 'O campo magnético é como um escudo invisível que protege o exoplaneta dos ventos fortes da sua estrela, mantendo tudo seguro e tranquilo!',
    },

    {   
        image: 'img/cap3/cap3img2.png',
        text: 'Sem esse escudo, os ventos espaciais poderiam levar embora a atmosfera do exoplaneta, deixando-o desprotegido, como um castelo sem muralhas!',
    }, 
    {   
        image: 'img/cap3/cap3img2.png',
        text: 'Esse campo especial também ajuda a manter o clima estável, criando um lugar mais acolhedor para a vida, como uma capa mágica que cuida do planeta!',
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

    // Verifica se é o último slide para mostrar o botão
    if (currentSlide === slides.length - 1) {
        document.getElementById('next-chapter-button').style.display = 'block';
    } else {
        document.getElementById('next-chapter-button').style.display = 'none';
    }
}
  
// Inicializa o primeiro slide como background
document.getElementById('planet-box').style.backgroundImage = `url(${slides[0].image})`;
  