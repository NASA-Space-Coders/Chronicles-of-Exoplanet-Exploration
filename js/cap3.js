let currentSlide = 0; 
const totalSlides = 5;

const slides = [
    
    {   
        image: 'img/cap3/cap3img1.jpg',
        text: 'O campo magnético é como um escudo invisível que protege o exoplaneta dos ventos fortes da sua estrela, mantendo tudo seguro e tranquilo!',
    },

    {   
        image: 'img/cap3/cap3img1.jpg',
        text: 'Sem esse escudo, os ventos espaciais poderiam levar embora a atmosfera do exoplaneta, deixando-o desprotegido, como um castelo sem muralhas!',
    }, 
    {   
        image: 'img/cap3/cap3img1.jpg',
        text: 'Esse campo especial também ajuda a manter o clima estável, criando um lugar mais acolhedor para a vida, como uma capa mágica que cuida do planeta!',
    },
];

function changeSlide(direction) {

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
        window.location.assign('cap4.html')
    }

    document.getElementById('planet-box').style.backgroundImage = `url(${slides[currentSlide].image})`;
    document.getElementById('bubble-text').innerHTML = `<p>${slides[currentSlide].text}</p>`;
}
  
document.getElementById('planet-box').style.backgroundImage = `url(${slides[0].image})`;
  