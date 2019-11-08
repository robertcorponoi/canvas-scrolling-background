'use strict';
/**
 * Defines the options available for an instance of ScrollingBackground and their default values.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Options =
/**
 * The initial x coordinate of the background on the canvas.
 * 
 * @property {number}
 * 
 * @default 0
 */

/**
 * The initial y coordinate of the background on the canvas.
 * 
 * @property {number}
 * 
 * @default 0
 */

/**
 * The direction that the background will scroll.
 * 
 * The available options are 'left' or 'right' with support for 'up' and 'down' coming soon.
 * 
 * @property {string}
 * 
 * @default 'left'
 */

/**
 * @param {Object} options
 * @param {number} options.x The initial x coordinate of the background on the canvas.
 * @param {number} options.y The initial y coordinate of the background on the canvas.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "x", 0);

  _defineProperty(this, "y", 0);

  _defineProperty(this, "direction", 'left');

  Object.assign(this, options);
};

exports["default"] = Options;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87QUFFbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7QUFXQTs7Ozs7QUFLQSxpQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBLDZCQTNCakIsQ0EyQmlCOztBQUFBLDZCQWxCakIsQ0FrQmlCOztBQUFBLHFDQVBULE1BT1M7O0FBRTNCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUVELEM7OztBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgb3B0aW9ucyBhdmFpbGFibGUgZm9yIGFuIGluc3RhbmNlIG9mIFNjcm9sbGluZ0JhY2tncm91bmQgYW5kIHRoZWlyIGRlZmF1bHQgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIHggY29vcmRpbmF0ZSBvZiB0aGUgYmFja2dyb3VuZCBvbiB0aGUgY2FudmFzLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDBcclxuICAgKi9cclxuICB4OiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5pdGlhbCB5IGNvb3JkaW5hdGUgb2YgdGhlIGJhY2tncm91bmQgb24gdGhlIGNhbnZhcy5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAwXHJcbiAgICovXHJcbiAgeTogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRpcmVjdGlvbiB0aGF0IHRoZSBiYWNrZ3JvdW5kIHdpbGwgc2Nyb2xsLlxyXG4gICAqIFxyXG4gICAqIFRoZSBhdmFpbGFibGUgb3B0aW9ucyBhcmUgJ2xlZnQnIG9yICdyaWdodCcgd2l0aCBzdXBwb3J0IGZvciAndXAnIGFuZCAnZG93bicgY29taW5nIHNvb24uXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgJ2xlZnQnXHJcbiAgICovXHJcbiAgZGlyZWN0aW9uOiBzdHJpbmcgPSAnbGVmdCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMueCBUaGUgaW5pdGlhbCB4IGNvb3JkaW5hdGUgb2YgdGhlIGJhY2tncm91bmQgb24gdGhlIGNhbnZhcy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy55IFRoZSBpbml0aWFsIHkgY29vcmRpbmF0ZSBvZiB0aGUgYmFja2dyb3VuZCBvbiB0aGUgY2FudmFzLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCkge1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblxyXG4gIH1cclxuXHJcbn07Il19