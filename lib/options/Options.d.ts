/**
 * Defines the options available for an instance of ScrollingBackground and their default values.
 */
export default class Options {
    /**
     * The initial x coordinate of the background on the canvas.
     *
     * @property {number}
     *
     * @default 0
     */
    x: number;
    /**
     * The initial y coordinate of the background on the canvas.
     *
     * @property {number}
     *
     * @default 0
     */
    y: number;
    /**
     * The direction that the background will scroll.
     *
     * The available options are 'left' or 'right' with support for 'up' and 'down' coming soon.
     *
     * @property {string}
     *
     * @default 'left'
     */
    direction: string;
    /**
     * @param {Object} options
     * @param {number} options.x The initial x coordinate of the background on the canvas.
     * @param {number} options.y The initial y coordinate of the background on the canvas.
     */
    constructor(options: Object);
}
