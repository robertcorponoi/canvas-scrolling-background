<h1 align="center">Canvas Scrolling Background</h1>

<p align="center">Manages an infinite scrolling background for your game.<p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/canvas-scrolling-background.svg?style=flat)](https://www.npmjs.com/package/canvas-scrolling-background)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/canvas-scrolling-background/badge.svg)](https://snyk.io/test/github/robertcorponoi/canvas-scrolling-background)
  ![npm](https://img.shields.io/npm/dt/canvas-scrolling-background)
  [![NPM downloads](https://img.shields.io/npm/dm/canvas-scrolling-background.svg?style=flat)](https://www.npmjs.com/package/canvas-scrolling-background)
  <a href="https://badge.fury.io/js/canvas-scrolling-background"><img src="https://img.shields.io/github/issues/robertcorponoi/canvas-scrolling-background.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/canvas-scrolling-background"><img src="https://img.shields.io/github/license/robertcorponoi/canvas-scrolling-background.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

## **Installation**

To install this module through npm, simply use the following command:

```
$ npm install canvas-scrolling-background
```

and to use it, you can import it as an ES6 module:

```js
// Webpack
import ScrollingBackground from 'canvas-scrolling-background';

// Browser
import ScrollingBackground from './node_modules/canvas-scrolling-background/canvas-scrolling-background.js';
```

**Note:** Since it is a default export you can name it whatever you like such as: `import Pikachu from 'canvas-scrolling-background';`

## **Usage**

Since this module expects that you already have a basic framework for your game, unless your game is just a scrolling background, you have to provide the following on initialization:

| param             	| type              	| description                                            	   | default 	|
|-------------------	|-------------------	|----------------------------------------------------------- |---------	|
| canvas            	| HTMLCanvasElement 	| The canvas to draw the scrolling background on         	   |         	|
| image             	| string            	| The path to image to use as the background             	   |         	|
| options           	| Object            	|                                                        	   |         	|
| options.x         	| number            	| The initial x position of the background on the canvas 	   | 0       	|
| options.y         	| number            	| The initial y position of the background on the canvas 	   | 0       	|
| options.direction 	| string            	| The direction the background should scroll (left or right) | left    	|

The canvas should already exist and so csb takes a reference to that in order to draw onto the same canvas as the rest of your game.

So let's say that you're making a game similar to the chrome dino runner game that you can play when you don't have a great internet connection. The image for this background can be found at 'https://cdn.elg.im/t-rex/img/1x-horizon.png'

**Note:** Only left and right scrolling are supported at this time with support for up and down scrolling coming soon.

So we could initialize this as:

```js
// Get the existing canvas.
const canvas = document.getElementById('my-canvas');

// The background should start at a x position of 0 which is default and it should scroll to the left which it does by
// default also. The only thing we want to do is show the background near the bottom of the canvas.
const options = {
  y: canvas.height - 10;
}

const sb = new ScrollingBackground(options);

// Since the image has to be loaded and that's an asynchronous operation, csb dispatches a signal when the image is
// loaded and the background is ready to be updated.
sb.loaded.add(start);

function start() {
  update();
}

function update() {
  // Your other canvas updates...

  // Runs the background update method to update the position of the background, the speed parameter determines how
  // fast the background scrolls.
  sb.update(3);

  // As any normal game loop, you have to call it on a requestAnimationFrame loop.
  requestAnimationFrame(update);
}
```

So while the example is pretty well commented the one part that might be confusing in the `loaded` signal. If you're not used to singals just know that they're like events but bound to a property so that they don't rely on loose typing. So for example the `loaded` signal as an event might look like:

```js
sb.on('loadaed', => {});
```

So really the signal is like an event being emitted but more strict. Anyways, this signal lets you know that the background image has finished loading and is ready to be used. This is when you provide your update method to csb.

## **Acknowledgements**

Thanks to [@jeremyskelly](https://github.com/jeremyskelly) for helping with the update method.

## **License**

MIT