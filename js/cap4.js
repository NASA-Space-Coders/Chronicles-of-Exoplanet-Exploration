let currentSlide = 0; 
const totalSlides = 5;

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
        image: 'img/cap4/cap4img3.png',
        text: 'Além disso, a água é o lugar perfeito para as primeiras formas de vida aparecerem, como uma piscina mágica onde os seres podem começar a nadar e crescer!',
    },
    {
        image: 'img/cap4/curiosidade4.jpg',
        text: 'Fato curioso! O planeta Kepler-411e pesa 10,8 vezes mais que a Terra, está a 47 quintilhões de quilômetros de distância e tem uma temperatura de 593 kelvins, muito mais quente que nosso planeta.'
    }
];

function changeSlide(direction) {

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    document.getElementById('planet-box').style.backgroundImage = `url(${slides[currentSlide].image})`;
    document.getElementById('bubble-text').innerHTML = `<p>${slides[currentSlide].text}</p>`;

    if (currentSlide === slides.length - 1) {
        document.getElementById('next-chapter-button').style.display = 'block';
    } else {
        document.getElementById('next-chapter-button').style.display = 'none';
    }
}
  
document.getElementById('planet-box').style.backgroundImage = `url(${slides[0].image})`;
  