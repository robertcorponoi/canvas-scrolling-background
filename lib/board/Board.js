'use strict';
/**
 * The Board object keeps the state of the canvas and context.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Board =
/*#__PURE__*/
function () {
  /**
   * A reference to the canvas element to use.
   * 
   * @private
   * 
   * @property {HTMLCanvasElement} 
   */

  /**
   * A reference to the canvas' 2D rendering context.
   * 
   * @private
   * 
   * @property {CanvasRenderingContext2D}
   */

  /**
   * @param {HTMLCanvasElement} canvas A reference to the canvas element to use.
   */
  function Board(canvas) {
    _classCallCheck(this, Board);

    _defineProperty(this, "_canvas", void 0);

    _defineProperty(this, "_ctx", void 0);

    this._canvas = canvas;
    this._ctx = this._canvas.getContext('2d');
  }
  /**
   * Returns the reference to the canvas.
   * 
   * @returns {HTMLCanvasElement}
   */


  _createClass(Board, [{
    key: "canvas",
    get: function get() {
      return this._canvas;
    }
    /**
     * Returns the reference to the canvas' 2D rendering context.
     * 
     * @returns {CanvasRenderingContext2D}
     */

  }, {
    key: "ctx",
    get: function get() {
      return this._ctx;
    }
  }]);

  return Board;
}();

exports["default"] = Board;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib2FyZC9Cb2FyZC50cyJdLCJuYW1lcyI6WyJCb2FyZCIsImNhbnZhcyIsIl9jYW52YXMiLCJfY3R4IiwiZ2V0Q29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEs7OztBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7O0FBR0EsaUJBQVlDLE1BQVosRUFBdUM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDckMsU0FBS0MsT0FBTCxHQUFlRCxNQUFmO0FBRUEsU0FBS0UsSUFBTCxHQUFZLEtBQUtELE9BQUwsQ0FBYUUsVUFBYixDQUF3QixJQUF4QixDQUFaO0FBQ0Q7QUFFRDs7Ozs7Ozs7O3dCQUtnQztBQUFFLGFBQU8sS0FBS0YsT0FBWjtBQUFzQjtBQUV4RDs7Ozs7Ozs7d0JBS29DO0FBQUUsYUFBTyxLQUFLQyxJQUFaO0FBQW1COzs7Ozs7O0FBQzFEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogVGhlIEJvYXJkIG9iamVjdCBrZWVwcyB0aGUgc3RhdGUgb2YgdGhlIGNhbnZhcyBhbmQgY29udGV4dC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2FudmFzIGVsZW1lbnQgdG8gdXNlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIVE1MQ2FudmFzRWxlbWVudH0gXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNhbnZhcycgMkQgcmVuZGVyaW5nIGNvbnRleHQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cclxuICAgKi9cclxuICBwcml2YXRlIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIEEgcmVmZXJlbmNlIHRvIHRoZSBjYW52YXMgZWxlbWVudCB0byB1c2UuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgIHRoaXMuX2N0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSB0byB0aGUgY2FudmFzLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIVE1MQ2FudmFzRWxlbWVudH1cclxuICAgKi9cclxuICBnZXQgY2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50IHsgcmV0dXJuIHRoaXMuX2NhbnZhczsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2UgdG8gdGhlIGNhbnZhcycgMkQgcmVuZGVyaW5nIGNvbnRleHQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cclxuICAgKi9cclxuICBnZXQgY3R4KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7IHJldHVybiB0aGlzLl9jdHg7IH1cclxufTsiXX0=