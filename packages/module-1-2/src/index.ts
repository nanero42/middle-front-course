export interface ImgUrls {
  sun: string;
  rain: string;
  winter: string;
}

export interface Audio {
  sun: HTMLAudioElement;
  rain: HTMLAudioElement;
  winter: HTMLAudioElement;
}

require('./scss/index.scss');

const summerMp3: string = require('./assets/sounds/summer.mp3');
const rainMp3: string =  require('./assets/sounds/rain.mp3');
const winterMp3: string =  require('./assets/sounds/winter.mp3');

const summerImgUrl: string =  require('./assets/img/summer-bg.jpg');
const rainImgUrl: string =  require('./assets/img/rainy-bg.jpg');
const winterImgUrl: string =  require('./assets/img/winter-bg.jpg');


const audio: Audio = {
  sun: new Audio(summerMp3),
  rain: new Audio(rainMp3),
  winter: new Audio(winterMp3),
}

const imgsUrls: ImgUrls = {
  sun: summerImgUrl,
  rain: rainImgUrl,
  winter: winterImgUrl,
}

const sun = document.getElementById('sun');
const rain = document.getElementById('rain');
const winter = document.getElementById('winter');
const cards = [sun, rain, winter] as HTMLLIElement[];

const audioRangeEl = document.getElementById('range') as HTMLInputElement;

let playedAudio = new Audio();

audioRangeEl.addEventListener('input', (e: Event) => {
    playedAudio.volume = +(e?.target as HTMLInputElement).value;
})

cards.forEach(c => {
  c.addEventListener('click', (e: Event) => {
    const id = (e?.target as HTMLLIElement).id;
    const currentBg = imgsUrls[id as keyof ImgUrls].replace('http://localhost:3000/', '');
    const bgImageEl = document.getElementById('bg-image') as HTMLDivElement;

    bgImageEl.style.backgroundImage = 'url(' + currentBg + ')';
    bgImageEl.style.backgroundPosition = 'center';
    bgImageEl.style.backgroundRepeat = 'no-repeat';
    bgImageEl.style.backgroundSize = 'cover';
    bgImageEl.style.height = '100vh';

    for (const a in audio) {
      audio[a as keyof Audio].pause();
    }

    playedAudio = audio[id as keyof Audio];
    playedAudio.play();
  })
})