'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hypergiant = _interopRequireDefault(require("hypergiant"));

var _Board = _interopRequireDefault(require("./board/Board"));

var _Options = _interopRequireDefault(require("./options/Options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Manages an infinite scrolling background in any direction for your game
 */
var ScrollingBackground =
/*#__PURE__*/
function () {
  /**
   * A reference to the Board module.
   * 
   * @private
   * 
   * @property {Board}
   */

  /**
   * A reference to the background image to use.
   * 
   * @private
   * 
   * @property {HTMLImageElement}
   */

  /**
   * A reference to the options for this instance of ScrollingBackground
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * A reference to the position of the background image on the canvas.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * A reference to the position of the background image copy on the canvas.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * A reference to the singal that is dispatched when the background is loaded.
   * 
   * @private
   * 
   * @property {Hypergiant}
   */

  /**
   * @param {HTMLCanvasElement} canvas The selector of the canvas element to use or a reference to the actual canvas element.
   * @param {string} image The path to the image to use for the background or a reference to an iamge element.
   * @param {Object} [options]
   * @param {number} [options.x=0] The initial x position of the background on the canvas.
   * @param {number} [options.y=0] The initial y position of the background on the canvas.
   * @param {string} [options.direction='left'] The direction that the background should scroll.
   */
  function ScrollingBackground(canvas, image, options) {
    _classCallCheck(this, ScrollingBackground);

    _defineProperty(this, "_board", void 0);

    _defineProperty(this, "_background", new Image());

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_bgPosition1", 0);

    _defineProperty(this, "_bgPosition2", 0);

    _defineProperty(this, "_loaded", new _hypergiant["default"]());

    this._board = new _Board["default"](canvas);
    this._options = new _Options["default"](options);

    this._loadImage(image);
  }
  /**
   * Loads the background image and dispatches the signal so that the updating can happen.
   * 
   * @private
   * 
   * @property {string} image The path to the background image to load.
   */


  _createClass(ScrollingBackground, [{
    key: "_loadImage",
    value: function _loadImage(image) {
      var _this = this;

      this._background.addEventListener('load', function () {
        _this._bgPosition2 = -_this._background.width;

        _this._loaded.dispatch();
      });

      this._background.src = image;
    }
    /**
     * Returns the loaded signal.
     * 
     * @returns {Hypergiant}
     */

  }, {
    key: "update",

    /**
     * Updates the position of the background on the canvas.
     * 
     * @param {number} [speed] The speed at which the background scrolls.
     */
    value: function update(speed) {
      this._board.ctx.drawImage(this._background, this._bgPosition1, this._options.y);

      this._board.ctx.drawImage(this._background, this._bgPosition2, this._options.y);

      var speedNormalized = speed;
      var widthNormalized = this._background.width;

      if (this._options.direction === 'right') {
        speedNormalized = -speedNormalized;
        widthNormalized = -widthNormalized;
      }

      this._bgPosition1 -= speedNormalized;
      this._bgPosition2 -= speedNormalized;
      if (Math.abs(this._bgPosition1) > this._background.width) this._bgPosition1 = this._bgPosition2 + widthNormalized;
      if (Math.abs(this._bgPosition2) > this._background.width) this._bgPosition2 = this._bgPosition1 + widthNormalized;
    }
  }, {
    key: "loaded",
    get: function get() {
      return this._loaded;
    }
  }]);

  return ScrollingBackground;
}();

exports["default"] = ScrollingBackground;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJTY3JvbGxpbmdCYWNrZ3JvdW5kIiwiY2FudmFzIiwiaW1hZ2UiLCJvcHRpb25zIiwiSW1hZ2UiLCJIeXBlcmdpYW50IiwiX2JvYXJkIiwiQm9hcmQiLCJfb3B0aW9ucyIsIk9wdGlvbnMiLCJfbG9hZEltYWdlIiwiX2JhY2tncm91bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2JnUG9zaXRpb24yIiwid2lkdGgiLCJfbG9hZGVkIiwiZGlzcGF0Y2giLCJzcmMiLCJzcGVlZCIsImN0eCIsImRyYXdJbWFnZSIsIl9iZ1Bvc2l0aW9uMSIsInkiLCJzcGVlZE5vcm1hbGl6ZWQiLCJ3aWR0aE5vcm1hbGl6ZWQiLCJkaXJlY3Rpb24iLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxtQjs7O0FBQ25COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVFBLCtCQUFZQyxNQUFaLEVBQXVDQyxLQUF2QyxFQUFzREMsT0FBdEQsRUFBeUU7QUFBQTs7QUFBQTs7QUFBQSx5Q0E5Q2pDLElBQUlDLEtBQUosRUE4Q2lDOztBQUFBOztBQUFBLDBDQTVCMUMsQ0E0QjBDOztBQUFBLDBDQW5CMUMsQ0FtQjBDOztBQUFBLHFDQVYzQyxJQUFJQyxzQkFBSixFQVUyQzs7QUFDdkUsU0FBS0MsTUFBTCxHQUFjLElBQUlDLGlCQUFKLENBQVVOLE1BQVYsQ0FBZDtBQUVBLFNBQUtPLFFBQUwsR0FBZ0IsSUFBSUMsbUJBQUosQ0FBWU4sT0FBWixDQUFoQjs7QUFFQSxTQUFLTyxVQUFMLENBQWdCUixLQUFoQjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OytCQU9tQkEsSyxFQUFlO0FBQUE7O0FBQ2hDLFdBQUtTLFdBQUwsQ0FBaUJDLGdCQUFqQixDQUFrQyxNQUFsQyxFQUEwQyxZQUFNO0FBQzlDLFFBQUEsS0FBSSxDQUFDQyxZQUFMLEdBQW9CLENBQUMsS0FBSSxDQUFDRixXQUFMLENBQWlCRyxLQUF0Qzs7QUFFQSxRQUFBLEtBQUksQ0FBQ0MsT0FBTCxDQUFhQyxRQUFiO0FBQ0QsT0FKRDs7QUFNQSxXQUFLTCxXQUFMLENBQWlCTSxHQUFqQixHQUF1QmYsS0FBdkI7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQTs7Ozs7MkJBS09nQixLLEVBQWU7QUFDcEIsV0FBS1osTUFBTCxDQUFZYSxHQUFaLENBQWdCQyxTQUFoQixDQUEwQixLQUFLVCxXQUEvQixFQUE0QyxLQUFLVSxZQUFqRCxFQUErRCxLQUFLYixRQUFMLENBQWNjLENBQTdFOztBQUVBLFdBQUtoQixNQUFMLENBQVlhLEdBQVosQ0FBZ0JDLFNBQWhCLENBQTBCLEtBQUtULFdBQS9CLEVBQTRDLEtBQUtFLFlBQWpELEVBQStELEtBQUtMLFFBQUwsQ0FBY2MsQ0FBN0U7O0FBRUEsVUFBSUMsZUFBdUIsR0FBR0wsS0FBOUI7QUFDQSxVQUFJTSxlQUF1QixHQUFHLEtBQUtiLFdBQUwsQ0FBaUJHLEtBQS9DOztBQUVBLFVBQUksS0FBS04sUUFBTCxDQUFjaUIsU0FBZCxLQUE0QixPQUFoQyxFQUF5QztBQUN2Q0YsUUFBQUEsZUFBZSxHQUFHLENBQUNBLGVBQW5CO0FBQ0FDLFFBQUFBLGVBQWUsR0FBRyxDQUFDQSxlQUFuQjtBQUNEOztBQUVELFdBQUtILFlBQUwsSUFBcUJFLGVBQXJCO0FBQ0EsV0FBS1YsWUFBTCxJQUFxQlUsZUFBckI7QUFFQSxVQUFJRyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLTixZQUFkLElBQThCLEtBQUtWLFdBQUwsQ0FBaUJHLEtBQW5ELEVBQTBELEtBQUtPLFlBQUwsR0FBb0IsS0FBS1IsWUFBTCxHQUFvQlcsZUFBeEM7QUFFMUQsVUFBSUUsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2QsWUFBZCxJQUE4QixLQUFLRixXQUFMLENBQWlCRyxLQUFuRCxFQUEwRCxLQUFLRCxZQUFMLEdBQW9CLEtBQUtRLFlBQUwsR0FBb0JHLGVBQXhDO0FBQzNEOzs7d0JBMUJ3QjtBQUFFLGFBQU8sS0FBS1QsT0FBWjtBQUFzQjs7Ozs7OztBQTJCbEQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBIeXBlcmdpYW50IGZyb20gJ2h5cGVyZ2lhbnQnO1xyXG5cclxuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQvQm9hcmQnO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMvT3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBhbiBpbmZpbml0ZSBzY3JvbGxpbmcgYmFja2dyb3VuZCBpbiBhbnkgZGlyZWN0aW9uIGZvciB5b3VyIGdhbWVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGluZ0JhY2tncm91bmQge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBCb2FyZCBtb2R1bGUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0JvYXJkfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2JvYXJkOiBCb2FyZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gdXNlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIVE1MSW1hZ2VFbGVtZW50fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2JhY2tncm91bmQ6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgU2Nyb2xsaW5nQmFja2dyb3VuZFxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgYmFja2dyb3VuZCBpbWFnZSBvbiB0aGUgY2FudmFzLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfYmdQb3NpdGlvbjE6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgYmFja2dyb3VuZCBpbWFnZSBjb3B5IG9uIHRoZSBjYW52YXMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9iZ1Bvc2l0aW9uMjogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHNpbmdhbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbiB0aGUgYmFja2dyb3VuZCBpcyBsb2FkZWQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbG9hZGVkOiBIeXBlcmdpYW50ID0gbmV3IEh5cGVyZ2lhbnQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFRoZSBzZWxlY3RvciBvZiB0aGUgY2FudmFzIGVsZW1lbnQgdG8gdXNlIG9yIGEgcmVmZXJlbmNlIHRvIHRoZSBhY3R1YWwgY2FudmFzIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIFRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byB1c2UgZm9yIHRoZSBiYWNrZ3JvdW5kIG9yIGEgcmVmZXJlbmNlIHRvIGFuIGlhbWdlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy54PTBdIFRoZSBpbml0aWFsIHggcG9zaXRpb24gb2YgdGhlIGJhY2tncm91bmQgb24gdGhlIGNhbnZhcy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMueT0wXSBUaGUgaW5pdGlhbCB5IHBvc2l0aW9uIG9mIHRoZSBiYWNrZ3JvdW5kIG9uIHRoZSBjYW52YXMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRpcmVjdGlvbj0nbGVmdCddIFRoZSBkaXJlY3Rpb24gdGhhdCB0aGUgYmFja2dyb3VuZCBzaG91bGQgc2Nyb2xsLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGltYWdlOiBzdHJpbmcsIG9wdGlvbnM6IFBvc2l0aW9uKSB7XHJcbiAgICB0aGlzLl9ib2FyZCA9IG5ldyBCb2FyZChjYW52YXMpO1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl9sb2FkSW1hZ2UoaW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZHMgdGhlIGJhY2tncm91bmQgaW1hZ2UgYW5kIGRpc3BhdGNoZXMgdGhlIHNpZ25hbCBzbyB0aGF0IHRoZSB1cGRhdGluZyBjYW4gaGFwcGVuLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGltYWdlIFRoZSBwYXRoIHRvIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGxvYWQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbG9hZEltYWdlKGltYWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2JhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fYmdQb3NpdGlvbjIgPSAtdGhpcy5fYmFja2dyb3VuZC53aWR0aDtcclxuXHJcbiAgICAgIHRoaXMuX2xvYWRlZC5kaXNwYXRjaCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYmFja2dyb3VuZC5zcmMgPSBpbWFnZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGxvYWRlZCBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgZ2V0IGxvYWRlZCgpOiBIeXBlcmdpYW50IHsgcmV0dXJuIHRoaXMuX2xvYWRlZDsgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYmFja2dyb3VuZCBvbiB0aGUgY2FudmFzLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc3BlZWRdIFRoZSBzcGVlZCBhdCB3aGljaCB0aGUgYmFja2dyb3VuZCBzY3JvbGxzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZShzcGVlZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9ib2FyZC5jdHguZHJhd0ltYWdlKHRoaXMuX2JhY2tncm91bmQsIHRoaXMuX2JnUG9zaXRpb24xLCB0aGlzLl9vcHRpb25zLnkpO1xyXG5cclxuICAgIHRoaXMuX2JvYXJkLmN0eC5kcmF3SW1hZ2UodGhpcy5fYmFja2dyb3VuZCwgdGhpcy5fYmdQb3NpdGlvbjIsIHRoaXMuX29wdGlvbnMueSk7XHJcblxyXG4gICAgbGV0IHNwZWVkTm9ybWFsaXplZDogbnVtYmVyID0gc3BlZWQ7XHJcbiAgICBsZXQgd2lkdGhOb3JtYWxpemVkOiBudW1iZXIgPSB0aGlzLl9iYWNrZ3JvdW5kLndpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICBzcGVlZE5vcm1hbGl6ZWQgPSAtc3BlZWROb3JtYWxpemVkO1xyXG4gICAgICB3aWR0aE5vcm1hbGl6ZWQgPSAtd2lkdGhOb3JtYWxpemVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2JnUG9zaXRpb24xIC09IHNwZWVkTm9ybWFsaXplZDtcclxuICAgIHRoaXMuX2JnUG9zaXRpb24yIC09IHNwZWVkTm9ybWFsaXplZDtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnModGhpcy5fYmdQb3NpdGlvbjEpID4gdGhpcy5fYmFja2dyb3VuZC53aWR0aCkgdGhpcy5fYmdQb3NpdGlvbjEgPSB0aGlzLl9iZ1Bvc2l0aW9uMiArIHdpZHRoTm9ybWFsaXplZDtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnModGhpcy5fYmdQb3NpdGlvbjIpID4gdGhpcy5fYmFja2dyb3VuZC53aWR0aCkgdGhpcy5fYmdQb3NpdGlvbjIgPSB0aGlzLl9iZ1Bvc2l0aW9uMSArIHdpZHRoTm9ybWFsaXplZDtcclxuICB9XHJcbn07Il19