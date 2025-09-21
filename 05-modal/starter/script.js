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

// // Helper functions
// const openModal = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
// };

// const closeModal = function () {
//   modalEl.classList.add('hidden');
//   overlayEl.classList.add('hidden');
// };

// Add focus management variables
let lastFocusedButton = null;

// Enhance openModal function with focus management
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  // Move focus to the modal
  modalEl.focus();
  // Store which button opened the modal
  lastFocusedButton = document.activeElement;
};

// Enhance closeModal function to restore focus
const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  // Restore focus to the button that opened the modal
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// Modal Development Hour 2 - Keyboard Events & Advanced UX
console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');
console.log('Enhanced modal development ready!');

// // Let's start by understanding keyboard events
// console.log('Keyboard events test');

// // Add a basic keyboard event listener
// document.addEventListener('keydown', function (e) {
//   // Log the event object to see what we get
//   console.log('Key pressed:', e);

//   // Log just the key property
//   console.log('Key name:', e.key);
// });

// // Let's modify our event listener to be more specific
// document.addEventListener('keydown', function (e) {
//   // Only respond to ESC key
//   if (e.key === 'Escape') {
//     console.log('ESC key pressed!');
//   }
// });

// Add ESC key functionality to close the modal
document.addEventListener('keydown', function (e) {
  // Check if ESC key was pressed AND modal is visible
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// // Let's add some debugging to see what's happening
// document.addEventListener('keydown', function (e) {
//   // Log what's happening for debugging
//   console.log(
//     'Key pressed:',
//     e.key,
//     'Modal visible:',
//     !modalEl.classList.contains('hidden')
//   );

//   // Check if ESC key was pressed AND modal is visible
//   if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// Add ARIA attributes for screen reader accessibility
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
