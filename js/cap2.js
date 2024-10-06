let currentSlide = 0;
const totalSlides = 5; 

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
    {
        image: 'img/cap2/curiosidade2.jpg',
        text: 'Fato curioso! O planeta Kepler-62d é um planeta intrigante, 14 vezes mais massivo que a Terra, localizado a cerca de 9,28 quintilhões de quilômetros de distância, com uma temperatura de 510 kelvins.'
    }
];

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
        window.location.assign('cap3.html')
    }

    document.getElementById('planet-box').style.backgroundImage = `url(${slides[currentSlide].image})`;
    document.getElementById('bubble-text').innerHTML = `<p>${slides[currentSlide].text}</p>`;

}

document.addEventListener("keydown", function(event) {
        if (event.keyCode == 39) {
          changeSlide(1);
        }

        if (event.keyCode == 37) {
            changeSlide(-1);
        }
})

document.getElementById('planet-box').style.backgroundImage = `url(${slides[0].image})`;
  