'use strict'

/**
 * The Board object keeps the state of the canvas and context.
 */
export default class Board {
  /**
   * A reference to the canvas element to use.
   * 
   * @private
   * 
   * @property {HTMLCanvasElement} 
   */
  private _canvas: HTMLCanvasElement;

  /**
   * A reference to the canvas' 2D rendering context.
   * 
   * @private
   * 
   * @property {CanvasRenderingContext2D}
   */
  private _ctx: CanvasRenderingContext2D;

  /**
   * @param {HTMLCanvasElement} canvas A reference to the canvas element to use.
   */
  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;

    this._ctx = this._canvas.getContext('2d')!;
  }

  /**
   * Returns the reference to the canvas.
   * 
   * @returns {HTMLCanvasElement}
   */
  get canvas(): HTMLCanvasElement { return this._canvas; }

  /**
   * Returns the reference to the canvas' 2D rendering context.
   * 
   * @returns {CanvasRenderingContext2D}
   */
  get ctx(): CanvasRenderingContext2D { return this._ctx; }
};