'use strict';

// select DOM elements to work with
const {clickArea, clicks, catNames, xucaCounts, chewieCounts} = {
  clickArea: document.querySelector('.click-area'),
  clicks: document.querySelector('#clicks'),
  catNames: document.querySelectorAll('.cat-name'),
  xucaCounts: document.querySelector('#xuca'),
  chewieCounts: document.querySelector('#chewie')
};

// line up cats
let cats = ['Xuca', 'Chewie'];

// initialize counters
let {xuca, chewie} = {
  xuca: 0,
  chewie: 0
};

// name the cats
for (let i = 0; i < cats.length; i++) {
  catNames[i].textContent = cats[i];
}

clickArea.addEventListener('click', (event) => {
  let target = event.target.getAttribute('data-cat-name');
  if (target === 'xuca') {
    xuca++;
    xucaCounts.textContent = '';
    xucaCounts.textContent = String(xuca);
  } else if (target === 'chewie') {
    chewie++;
    chewieCounts.textContent = '';
    chewieCounts.textContent = String(chewie);
  } else {
    return;
  }
}, false);
