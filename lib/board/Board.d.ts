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
    private _canvas;
    /**
     * A reference to the canvas' 2D rendering context.
     *
     * @private
     *
     * @property {CanvasRenderingContext2D}
     */
    private _ctx;
    /**
     * @param {HTMLCanvasElement} canvas A reference to the canvas element to use.
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Returns the reference to the canvas.
     *
     * @returns {HTMLCanvasElement}
     */
    get canvas(): HTMLCanvasElement;
    /**
     * Returns the reference to the canvas' 2D rendering context.
     *
     * @returns {CanvasRenderingContext2D}
     */
    get ctx(): CanvasRenderingContext2D;
}
