'use strict';
// Modal Development Hour 1 - Foundation & Class Toggling
console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');
console.log('Modal project ready!');

// // Select the modal element
// const modalEl = document.querySelector('.modal');

// // Select the overlay element
// const overlayEl = document.querySelector('.overlay');

// // Select the close button
// const btnCloseModalEl = document.querySelector('.close-modal');

// // Select ALL the open buttons using querySelectorAll
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // Verify our selections worked correctly
// console.log('Open buttons:', btnsOpenModalEl.length);

// // Create our openModal function
// const openModal = function () {
//   // Remove the hidden class from modal to make it visible
//   modalEl.classList.remove('hidden');

//   // Remove the hidden class from overlay to show dark background
//   overlayEl.classList.remove('hidden');
// };

// // Create our closeModal function
// const closeModal = function () {
//   // Add the hidden class back to modal to hide it
//   modalEl.classList.add('hidden');

//   // Add the hidden class back to overlay to hide dark background
//   overlayEl.classList.add('hidden');
// };
// // Attach openModal function to all show buttons
// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// // Attach closeModal function to close button
// btnCloseModalEl.addEventListener('click', closeModal);

// // Attach closeModal function to overlay click
// overlayEl.addEventListener('click', closeModal);

// Selections
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Helper functions
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
