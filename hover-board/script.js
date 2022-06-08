const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = [
  '#32a852',
  '#a18a25',
  '#9e251c',
  '5c1173',
  '2c32a3',
  '#105c21',
  '#44a9ab',
  '#275427',
];

function getRandomColor(array) {
  const randomIndex = array[Math.floor(Math.random() * array.length)];
  return randomIndex;
}

function setColor(element) {
  let color = getRandomColor(colors);
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}
