import Hypergiant from 'hypergiant';
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
    private _board;
    /**
     * A reference to the background image to use.
     *
     * @private
     *
     * @property {HTMLImageElement}
     */
    private _background;
    /**
     * A reference to the options for this instance of ScrollingBackground
     *
     * @private
     *
     * @property {Options}
     */
    private _options;
    /**
     * A reference to the position of the background image on the canvas.
     *
     * @private
     *
     * @property {number}
     */
    private _bgPosition1;
    /**
     * A reference to the position of the background image copy on the canvas.
     *
     * @private
     *
     * @property {number}
     */
    private _bgPosition2;
    /**
     * A reference to the singal that is dispatched when the background is loaded.
     *
     * @private
     *
     * @property {Hypergiant}
     */
    private _loaded;
    /**
     * @param {HTMLCanvasElement} canvas The selector of the canvas element to use or a reference to the actual canvas element.
     * @param {string} image The path to the image to use for the background or a reference to an iamge element.
     * @param {Object} [options]
     * @param {number} [options.x=0] The initial x position of the background on the canvas.
     * @param {number} [options.y=0] The initial y position of the background on the canvas.
     * @param {string} [options.direction='left'] The direction that the background should scroll.
     */
    constructor(canvas: HTMLCanvasElement, image: string, options: Position);
    /**
     * Loads the background image and dispatches the signal so that the updating can happen.
     *
     * @private
     *
     * @property {string} image The path to the background image to load.
     */
    private _loadImage;
    /**
     * Returns the loaded signal.
     *
     * @returns {Hypergiant}
     */
    get loaded(): Hypergiant;
    /**
     * Updates the position of the background on the canvas.
     *
     * @param {number} [speed] The speed at which the background scrolls.
     */
    update(speed: number): void;
}
