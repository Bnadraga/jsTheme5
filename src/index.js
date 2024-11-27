// NANOID

// import { nanoid } from "nanoid";

// const id  = nanoid(4)
// console.log(id)

// import { customAlphabet } from "nanoid";

// const alphabet = 'abc123'
// const customNanoid = customAlphabet(alphabet, 5)
// const id = customNanoid()
// console.log(id)

// PNOTIFY

// import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';
// import { error, notice, success, info } from '@pnotify/core';
// defaultModules.set(PNotifyMobile, {});

// alert({
//   text: 'Hello!',
// });

// const success = success({
//     text: 'Correct operation',
//     dalay: 3000
// })
// const notice = notice({
//     text: 'Correct operation',
// })
// const error = error({
//     text: 'Correct operation',
// })
// const info = info({
//     text: 'Correct operation',
// })

// CHART.JS

// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

// const date = {
//   labels: ['Januery', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'temp',
//       data: [15, 14, 16, 4, 20,0 , 23],
//       fill: false,
//       borderColor: 'black',
//       tension: 0.1,
//     },
//   ],
// };
// const config = {
//   type: 'line',
//   data: date,
//   options: {},
// };
// document.addEventListener('DOMContentLoaded', () => {
//     const a = document.getElementById('myChart').getContext('2d')
//     new Chart(a, config)
// });

// BASICLIGHTBOX

// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

// const img =
//   '<img width="500" src="https://images.pexels.com/photos/16330147/pexels-photo-16330147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img">';
// const show = basicLightbox.create(img);
// document.getElementById('btn').addEventListener('click', () => {
//   show.show();
// });

//      -------------------------------------------------------------------------------------------

// task 1

import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import { error, success } from '@pnotify/core';
defaultModules.set(PNotifyMobile, {});

const keys = ['d', 'j', 'e', 'b', 'h', 'p', 'x', 't', 'q', 'a'];
let currentKeyIndex = 0;

function startGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  document.getElementById('key').textContent = keys[currentKeyIndex];
}

document.addEventListener('keydown', e => {
  if (e.key === keys[currentKeyIndex]) {
    success({ text: 'Correct operation', dalay: 200 });
    startGame();
  } else {
    error({ text: 'Uncorrect operation', dalay: 200 });
  }
});

document.addEventListener('keypress', e => {
  e.preventDefault();
});

document.getElementById('resetGame').addEventListener('click', () => {
  document.getElementById('message').textContent =
    'Натисніть правильну клавішу:';
  startGame();
});
startGame();

// task 2

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const chartData = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ],
  datasets: [
    {
      label: 'Продажі за останній місяць',
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: '#2196f3',
      borderColor: '#2196f3',
      borderWidth: 1,
    },
  ],
};
const config = {
  type: 'line',
  data: chartData,
  options: {},
};

document.addEventListener('DOMContentLoaded', () => {
  const a = document.getElementById('sales-chart').getContext('2d');
  new Chart(a, config);
});
