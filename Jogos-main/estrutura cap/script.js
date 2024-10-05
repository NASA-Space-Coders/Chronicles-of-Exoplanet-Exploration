function myFunction(x) {
    x.classList.toggle("change");
}

let currentSlide = 0;

const slides = [
    {
        image: '/cap1/cap1Midia/imagem1.jpg',
        text: 'Olá, bem vindo ao capítulo 1.',
    },
    {
        image: '/cap1/cap1Midia/imagem2.jpg',
        text: 'Aqui está a segunda parte do capítulo 1.',
    }
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
  