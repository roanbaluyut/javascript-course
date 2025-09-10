'use strict';

console.log('Game Setup Ready!');

// 123456 DOM Element Selection Foundation
console.log('DOM Element Selection');

const messageEl = document.querySelector('.message');
//console.log(messageEl);
//console.log(messageEl.textContent);

//messageEl.textContent = 'Hello World JavaScript!';

// Access Score Class Name
const scoreEl = document.querySelector('.score');
//scoreEl.textContent = 50;

// Number Class Name
const numberEl = document.querySelector('.number');
//numberEl.textContent = 15;

const highScoreEl = document.querySelector('.highscore');
//highScoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
//guessEl.value = 10;

// Game State Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number', secretNumber);

let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

console.log('Game State Initialized');

// Create the ff variables
// playerName attempts gameActive
let playerName = 'Roan';
let attempts = 0;
let gameActive = true;

console.log(playerName);
console.log(attempts);
console.log(gameActive);

// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  // Player's Guess
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high!!!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = 'Too low!!!';
  }
});
