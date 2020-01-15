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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87QUFDbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7QUFXQTs7Ozs7QUFLQSxpQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBLDZCQTNCakIsQ0EyQmlCOztBQUFBLDZCQWxCakIsQ0FrQmlCOztBQUFBLHFDQVBULE1BT1M7O0FBQzNCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUNELEM7OztBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgb3B0aW9ucyBhdmFpbGFibGUgZm9yIGFuIGluc3RhbmNlIG9mIFNjcm9sbGluZ0JhY2tncm91bmQgYW5kIHRoZWlyIGRlZmF1bHQgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgeCBjb29yZGluYXRlIG9mIHRoZSBiYWNrZ3JvdW5kIG9uIHRoZSBjYW52YXMuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgMFxyXG4gICAqL1xyXG4gIHg6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIHkgY29vcmRpbmF0ZSBvZiB0aGUgYmFja2dyb3VuZCBvbiB0aGUgY2FudmFzLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDBcclxuICAgKi9cclxuICB5OiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGlyZWN0aW9uIHRoYXQgdGhlIGJhY2tncm91bmQgd2lsbCBzY3JvbGwuXHJcbiAgICogXHJcbiAgICogVGhlIGF2YWlsYWJsZSBvcHRpb25zIGFyZSAnbGVmdCcgb3IgJ3JpZ2h0JyB3aXRoIHN1cHBvcnQgZm9yICd1cCcgYW5kICdkb3duJyBjb21pbmcgc29vbi5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAnbGVmdCdcclxuICAgKi9cclxuICBkaXJlY3Rpb246IHN0cmluZyA9ICdsZWZ0JztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy54IFRoZSBpbml0aWFsIHggY29vcmRpbmF0ZSBvZiB0aGUgYmFja2dyb3VuZCBvbiB0aGUgY2FudmFzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnkgVGhlIGluaXRpYWwgeSBjb29yZGluYXRlIG9mIHRoZSBiYWNrZ3JvdW5kIG9uIHRoZSBjYW52YXMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxufTsiXX0=