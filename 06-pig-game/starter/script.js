'use strict';
// Pig Game Development Hour 1 - Foundation & Dice Rolling
console.log('=== PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING ===');
console.log('Pig Game project ready!');

// Game state variables
let scores, currentScore, activePlayer, playing;

// Element selections
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

// // Initialize game
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   diceEl.classList.add('hidden');
// };
// init();

// Enhanced init function for complete game reset
const init = function () {
  // Reset game state
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Reset all displays
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Hide dice
  diceEl.classList.add('hidden');

  // Reset player styling
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// // Roll dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // We'll add the dice logic here
//   }
// });

// // Roll dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     // More logic coming...
//   }
// });

// // Roll dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;
//     // More logic coming...
//   }
// });

// // Roll dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // Handle rolling a 1
//     }
//   }
// });

// // Roll dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // Switch player logic (simplified for Hour 1)
//       currentScore = 0;
//       document.getElementById(`current--${activePlayer}`).textContent = 0;
//     }
//   }
// });

// // Test game state
// console.log('Scores:', scores);
// console.log('Current Score:', currentScore);
// console.log('Active Player:', activePlayer);
// console.log('Playing:', playing);

// Create switchPlayer function
const switchPlayer = function () {
  // Reset current score for the active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // Reset currentScore variable
  currentScore = 0;

  // Switch to the other player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggle the active class on both players
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Updated roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Use our new switchPlayer function
      switchPlayer();
    }
  }
});

// Select the hold button
const btnHold = document.querySelector('.btn--hold');

// // Hold functionality
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // Add current score to active player's total score
//     scores[activePlayer] += currentScore;

//     // Update the display
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // Switch to next player
//     switchPlayer();
//   }
// });

// // Enhanced hold functionality with proper validation
// btnHold.addEventListener('click', function () {
//   if (playing && currentScore > 0) {
//     // Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // Switch to next player
//     switchPlayer();
//   }
// });

// // Add this test code to verify everything works
// console.log('Scores array:', scores);
// console.log('Current score:', currentScore);
// console.log('Active player:', activePlayer);

// // Test the visual indicators
// console.log(
//   'Player 0 has active class:',
//   player0El.classList.contains('player--active')
// );
// console.log(
//   'Player 1 has active class:',
//   player1El.classList.contains('player--active')
// );

// // Test complete game state
// console.log('Scores:', scores);
// console.log('Current Score:', currentScore);
// console.log('Active Player:', activePlayer);
// console.log('Playing:', playing);
// console.log('Player 0 active:', player0El.classList.contains('player--active'));
// console.log('Player 1 active:', player1El.classList.contains('player--active'));

// Enhanced hold functionality with win condition and validation
btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check for win condition
    if (scores[activePlayer] >= 100) {
      // Player wins!
      playing = false;
      diceEl.classList.add('hidden');

      // Add winner styling
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // Remove active class from winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// // Add this test code to verify win condition works
// console.log('Current scores:', scores);
// console.log('Win condition met:', scores[activePlayer] >= 100);
// console.log('Game playing:', playing);

// Select the new game button
const btnNew = document.querySelector('.btn--new');

// New game functionality
btnNew.addEventListener('click', init);

// // Test complete game reset
// console.log('Game reset - scores:', scores);
// console.log('Game reset - playing:', playing);
// console.log('Game reset - active player:', activePlayer);

// Test complete game state
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 winner:', player0El.classList.contains('player--winner'));
console.log('Player 1 winner:', player1El.classList.contains('player--winner'));
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));
