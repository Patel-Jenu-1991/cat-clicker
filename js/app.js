'use strict';

// select DOM elements to work with
const {clickArea, clicks, catNames} = {
  clickArea: document.querySelector('.click-area'),
  clicks: document.querySelector('#clicks'),
  catNames: document.querySelectorAll('.cat-name')
};

// line up cats, initialize counter
let cats = ['Xuca', 'Chewie'], counter = 0;

// name the cats
for (var i = 0; i < cats.length; i++) {
  catNames[i].textContent = cats[i];
  catNames[i].textContent = cats[i];
}

clickArea.addEventListener('click', (event) => {
  let target = event.target.nodeName;
  if (target === 'IMG') {
    counter++; // increment counter
    clicks.textContent = ''; // empty click counter
    clicks.textContent = String(counter); // update click counter
  } else {
    return;
  }
}, false);
