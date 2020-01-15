'use strict'

import Hypergiant from 'hypergiant';

import Board from './board/Board';
import Options from './options/Options';

/**
 * Manages an infinite scrolling background in any direction for your game
 */
export default class ScrollingBackground {
  /**
   * A reference to the Board module.
   * 
   * @private
   * 
   * @property {Board}
   */
  private _board: Board;

  /**
   * A reference to the background image to use.
   * 
   * @private
   * 
   * @property {HTMLImageElement}
   */
  private _background: HTMLImageElement = new Image();

  /**
   * A reference to the options for this instance of ScrollingBackground
   * 
   * @private
   * 
   * @property {Options}
   */
  private _options: Options;

  /**
   * A reference to the position of the background image on the canvas.
   * 
   * @private
   * 
   * @property {number}
   */
  private _bgPosition1: number = 0;

  /**
   * A reference to the position of the background image copy on the canvas.
   * 
   * @private
   * 
   * @property {number}
   */
  private _bgPosition2: number = 0;

  /**
   * A reference to the singal that is dispatched when the background is loaded.
   * 
   * @private
   * 
   * @property {Hypergiant}
   */
  private _loaded: Hypergiant = new Hypergiant();

  /**
   * @param {HTMLCanvasElement} canvas The selector of the canvas element to use or a reference to the actual canvas element.
   * @param {string} image The path to the image to use for the background or a reference to an iamge element.
   * @param {Object} [options]
   * @param {number} [options.x=0] The initial x position of the background on the canvas.
   * @param {number} [options.y=0] The initial y position of the background on the canvas.
   * @param {string} [options.direction='left'] The direction that the background should scroll.
   */
  constructor(canvas: HTMLCanvasElement, image: string, options: Position) {
    this._board = new Board(canvas);

    this._options = new Options(options);

    this._loadImage(image);
  }

  /**
   * Loads the background image and dispatches the signal so that the updating can happen.
   * 
   * @private
   * 
   * @property {string} image The path to the background image to load.
   */
  private _loadImage(image: string) {
    this._background.addEventListener('load', () => {
      this._bgPosition2 = -this._background.width;

      this._loaded.dispatch();
    });

    this._background.src = image;
  }

  /**
   * Returns the loaded signal.
   * 
   * @returns {Hypergiant}
   */
  get loaded(): Hypergiant { return this._loaded; }

  /**
   * Updates the position of the background on the canvas.
   * 
   * @param {number} [speed] The speed at which the background scrolls.
   */
  update(speed: number) {
    this._board.ctx.drawImage(this._background, this._bgPosition1, this._options.y);

    this._board.ctx.drawImage(this._background, this._bgPosition2, this._options.y);

    let speedNormalized: number = speed;
    let widthNormalized: number = this._background.width;

    if (this._options.direction === 'right') {
      speedNormalized = -speedNormalized;
      widthNormalized = -widthNormalized;
    }

    this._bgPosition1 -= speedNormalized;
    this._bgPosition2 -= speedNormalized;

    if (Math.abs(this._bgPosition1) > this._background.width) this._bgPosition1 = this._bgPosition2 + widthNormalized;

    if (Math.abs(this._bgPosition2) > this._background.width) this._bgPosition2 = this._bgPosition1 + widthNormalized;
  }
};