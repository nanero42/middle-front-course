require('./scss/index.scss');

const summerMp3 = require('./assets/sounds/summer.mp3');
const rainMp3 =  require('./assets/sounds/rain.mp3');
const winterMp3 =  require('./assets/sounds/winter.mp3');

const summerImgUrl =  require('./assets/img/summer-bg.jpg');
const rainImgUrl =  require('./assets/img/rainy-bg.jpg');
const winterImgUrl =  require('./assets/img/winter-bg.jpg');

const audio = {
  sun: new Audio(summerMp3),
  rain: new Audio(rainMp3),
  winter: new Audio(winterMp3),
}

const imgsUrls = {
  sun: summerImgUrl,
  rain: rainImgUrl,
  winter: winterImgUrl,
}

const sun = document.getElementById('sun');
const rain = document.getElementById('rain');
const winter = document.getElementById('winter');
const cards = [sun, rain, winter];

const audioRangeEl = document.getElementById('range');

let playedAudio = null;

audioRangeEl.addEventListener('input', e => {
  playedAudio.volume = e.target.value;
})

cards.forEach(c => {
  c.addEventListener('click', e => {
    const id = e.target.id;
    const currentBg = imgsUrls[id].replace('http://localhost:3000/', '');
    const bgImageEl = document.getElementById('bg-image');

    bgImageEl.style.backgroundImage = 'url(' + currentBg + ')';
    bgImageEl.style.backgroundPosition = 'center';
    bgImageEl.style.backgroundRepeat = 'no-repeat';
    bgImageEl.style.backgroundSize = 'cover';
    bgImageEl.style.height = '100vh';

    for (const a in audio) {
      audio[a].pause();
    }

    playedAudio = audio[id];
    playedAudio.play();
  })
})