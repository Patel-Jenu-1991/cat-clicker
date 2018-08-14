'use strict';

// select DOM elements to work with
const {cat, clicks} = {
  cat: document.querySelector('.xuca'),
  clicks: document.querySelector('#clicks')
};

// initialize counter
let counter = 0;

cat.addEventListener('click', (event) => {
  counter++; // increment counter
  clicks.textContent = ''; // empty click counter
  clicks.textContent = String(counter); // update click counter
}, false);
