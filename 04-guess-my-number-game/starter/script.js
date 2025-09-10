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

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return;
  }

  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return;
  }

  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high!!!';
    score--;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = 'red';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = 'Too low!!!';
    score--;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = 'red';
  }

  if (score < 1) {
    document.querySelector('.message').textContent = 'You lost!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('Working!');
  // To reset score & secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New secret number after reset', secretNumber);
  // Reset UI Display
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});
