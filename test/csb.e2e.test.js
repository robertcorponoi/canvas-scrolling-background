'use strict'

import ScrollingBackground from './canvas-scrolling-background.js';

const canvasLeft = document.getElementById('scroll-left');
const canvasRight = document.getElementById('scroll-right');

const ctxLeft = canvasLeft.getContext('2d');
const ctxRight = canvasRight.getContext('2d');

const sbLeft = new ScrollingBackground(canvasLeft, 'https://cdn.elg.im/t-rex/img/1x-horizon.png', { direction: 'left' });

const sbRight = new ScrollingBackground(canvasRight, 'https://cdn.elg.im/t-rex/img/1x-horizon.png', { direction: 'right' });

sbLeft.loaded.add(start);
sbRight.loaded.add(start);

function start() {

  update();

}

function update() {

  ctxLeft.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
  ctxRight.clearRect(0, 0, canvasRight.width, canvasRight.height);

  sbLeft.update(3);
  sbRight.update(3);

  requestAnimationFrame(update);

}