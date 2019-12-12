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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJTY3JvbGxpbmdCYWNrZ3JvdW5kIiwiY2FudmFzIiwiaW1hZ2UiLCJvcHRpb25zIiwiSW1hZ2UiLCJIeXBlcmdpYW50IiwiX2JvYXJkIiwiQm9hcmQiLCJfb3B0aW9ucyIsIk9wdGlvbnMiLCJfbG9hZEltYWdlIiwiX2JhY2tncm91bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2JnUG9zaXRpb24yIiwid2lkdGgiLCJfbG9hZGVkIiwiZGlzcGF0Y2giLCJzcmMiLCJzcGVlZCIsImN0eCIsImRyYXdJbWFnZSIsIl9iZ1Bvc2l0aW9uMSIsInkiLCJzcGVlZE5vcm1hbGl6ZWQiLCJ3aWR0aE5vcm1hbGl6ZWQiLCJkaXJlY3Rpb24iLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxtQjs7O0FBRW5COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVFBLCtCQUFZQyxNQUFaLEVBQXVDQyxLQUF2QyxFQUFzREMsT0FBdEQsRUFBeUU7QUFBQTs7QUFBQTs7QUFBQSx5Q0E5Q2pDLElBQUlDLEtBQUosRUE4Q2lDOztBQUFBOztBQUFBLDBDQTVCMUMsQ0E0QjBDOztBQUFBLDBDQW5CMUMsQ0FtQjBDOztBQUFBLHFDQVYzQyxJQUFJQyxzQkFBSixFQVUyQzs7QUFFdkUsU0FBS0MsTUFBTCxHQUFjLElBQUlDLGlCQUFKLENBQVVOLE1BQVYsQ0FBZDtBQUVBLFNBQUtPLFFBQUwsR0FBZ0IsSUFBSUMsbUJBQUosQ0FBWU4sT0FBWixDQUFoQjs7QUFFQSxTQUFLTyxVQUFMLENBQWdCUixLQUFoQjtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7OytCQU9tQkEsSyxFQUFlO0FBQUE7O0FBRWhDLFdBQUtTLFdBQUwsQ0FBaUJDLGdCQUFqQixDQUFrQyxNQUFsQyxFQUEwQyxZQUFNO0FBRTlDLFFBQUEsS0FBSSxDQUFDQyxZQUFMLEdBQW9CLENBQUMsS0FBSSxDQUFDRixXQUFMLENBQWlCRyxLQUF0Qzs7QUFFQSxRQUFBLEtBQUksQ0FBQ0MsT0FBTCxDQUFhQyxRQUFiO0FBRUQsT0FORDs7QUFRQSxXQUFLTCxXQUFMLENBQWlCTSxHQUFqQixHQUF1QmYsS0FBdkI7QUFFRDtBQUVEOzs7Ozs7Ozs7QUFPQTs7Ozs7MkJBS09nQixLLEVBQWU7QUFFcEIsV0FBS1osTUFBTCxDQUFZYSxHQUFaLENBQWdCQyxTQUFoQixDQUEwQixLQUFLVCxXQUEvQixFQUE0QyxLQUFLVSxZQUFqRCxFQUErRCxLQUFLYixRQUFMLENBQWNjLENBQTdFOztBQUVBLFdBQUtoQixNQUFMLENBQVlhLEdBQVosQ0FBZ0JDLFNBQWhCLENBQTBCLEtBQUtULFdBQS9CLEVBQTRDLEtBQUtFLFlBQWpELEVBQStELEtBQUtMLFFBQUwsQ0FBY2MsQ0FBN0U7O0FBRUEsVUFBSUMsZUFBdUIsR0FBR0wsS0FBOUI7QUFDQSxVQUFJTSxlQUF1QixHQUFHLEtBQUtiLFdBQUwsQ0FBaUJHLEtBQS9DOztBQUVBLFVBQUksS0FBS04sUUFBTCxDQUFjaUIsU0FBZCxLQUE0QixPQUFoQyxFQUF5QztBQUV2Q0YsUUFBQUEsZUFBZSxHQUFHLENBQUNBLGVBQW5CO0FBQ0FDLFFBQUFBLGVBQWUsR0FBRyxDQUFDQSxlQUFuQjtBQUVEOztBQUVELFdBQUtILFlBQUwsSUFBcUJFLGVBQXJCO0FBQ0EsV0FBS1YsWUFBTCxJQUFxQlUsZUFBckI7QUFFQSxVQUFJRyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLTixZQUFkLElBQThCLEtBQUtWLFdBQUwsQ0FBaUJHLEtBQW5ELEVBQTBELEtBQUtPLFlBQUwsR0FBb0IsS0FBS1IsWUFBTCxHQUFvQlcsZUFBeEM7QUFFMUQsVUFBSUUsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2QsWUFBZCxJQUE4QixLQUFLRixXQUFMLENBQWlCRyxLQUFuRCxFQUEwRCxLQUFLRCxZQUFMLEdBQW9CLEtBQUtRLFlBQUwsR0FBb0JHLGVBQXhDO0FBRTNEOzs7d0JBOUJ3QjtBQUFFLGFBQU8sS0FBS1QsT0FBWjtBQUFzQjs7Ozs7OztBQWdDbEQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBIeXBlcmdpYW50IGZyb20gJ2h5cGVyZ2lhbnQnO1xyXG5cclxuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQvQm9hcmQnO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMvT3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBhbiBpbmZpbml0ZSBzY3JvbGxpbmcgYmFja2dyb3VuZCBpbiBhbnkgZGlyZWN0aW9uIGZvciB5b3VyIGdhbWVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGluZ0JhY2tncm91bmQge1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgQm9hcmQgbW9kdWxlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtCb2FyZH1cclxuICAgKi9cclxuICBwcml2YXRlIF9ib2FyZDogQm9hcmQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIHVzZS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEltYWdlRWxlbWVudH1cclxuICAgKi9cclxuICBwcml2YXRlIF9iYWNrZ3JvdW5kOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIGluc3RhbmNlIG9mIFNjcm9sbGluZ0JhY2tncm91bmRcclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7T3B0aW9uc31cclxuICAgKi9cclxuICBwcml2YXRlIF9vcHRpb25zOiBPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcG9zaXRpb24gb2YgdGhlIGJhY2tncm91bmQgaW1hZ2Ugb24gdGhlIGNhbnZhcy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2JnUG9zaXRpb24xOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcG9zaXRpb24gb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UgY29weSBvbiB0aGUgY2FudmFzLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfYmdQb3NpdGlvbjI6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBzaW5nYWwgdGhhdCBpcyBkaXNwYXRjaGVkIHdoZW4gdGhlIGJhY2tncm91bmQgaXMgbG9hZGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2xvYWRlZDogSHlwZXJnaWFudCA9IG5ldyBIeXBlcmdpYW50KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBUaGUgc2VsZWN0b3Igb2YgdGhlIGNhbnZhcyBlbGVtZW50IHRvIHVzZSBvciBhIHJlZmVyZW5jZSB0byB0aGUgYWN0dWFsIGNhbnZhcyBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBUaGUgcGF0aCB0byB0aGUgaW1hZ2UgdG8gdXNlIGZvciB0aGUgYmFja2dyb3VuZCBvciBhIHJlZmVyZW5jZSB0byBhbiBpYW1nZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMueD0wXSBUaGUgaW5pdGlhbCB4IHBvc2l0aW9uIG9mIHRoZSBiYWNrZ3JvdW5kIG9uIHRoZSBjYW52YXMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnk9MF0gVGhlIGluaXRpYWwgeSBwb3NpdGlvbiBvZiB0aGUgYmFja2dyb3VuZCBvbiB0aGUgY2FudmFzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kaXJlY3Rpb249J2xlZnQnXSBUaGUgZGlyZWN0aW9uIHRoYXQgdGhlIGJhY2tncm91bmQgc2hvdWxkIHNjcm9sbC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBpbWFnZTogc3RyaW5nLCBvcHRpb25zOiBQb3NpdGlvbikge1xyXG5cclxuICAgIHRoaXMuX2JvYXJkID0gbmV3IEJvYXJkKGNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuX2xvYWRJbWFnZShpbWFnZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZHMgdGhlIGJhY2tncm91bmQgaW1hZ2UgYW5kIGRpc3BhdGNoZXMgdGhlIHNpZ25hbCBzbyB0aGF0IHRoZSB1cGRhdGluZyBjYW4gaGFwcGVuLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGltYWdlIFRoZSBwYXRoIHRvIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGxvYWQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbG9hZEltYWdlKGltYWdlOiBzdHJpbmcpIHtcclxuXHJcbiAgICB0aGlzLl9iYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9iZ1Bvc2l0aW9uMiA9IC10aGlzLl9iYWNrZ3JvdW5kLndpZHRoO1xyXG5cclxuICAgICAgdGhpcy5fbG9hZGVkLmRpc3BhdGNoKCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYmFja2dyb3VuZC5zcmMgPSBpbWFnZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsb2FkZWQgc2lnbmFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fVxyXG4gICAqL1xyXG4gIGdldCBsb2FkZWQoKTogSHlwZXJnaWFudCB7IHJldHVybiB0aGlzLl9sb2FkZWQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGJhY2tncm91bmQgb24gdGhlIGNhbnZhcy5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NwZWVkXSBUaGUgc3BlZWQgYXQgd2hpY2ggdGhlIGJhY2tncm91bmQgc2Nyb2xscy5cclxuICAgKi9cclxuICB1cGRhdGUoc3BlZWQ6IG51bWJlcikge1xyXG5cclxuICAgIHRoaXMuX2JvYXJkLmN0eC5kcmF3SW1hZ2UodGhpcy5fYmFja2dyb3VuZCwgdGhpcy5fYmdQb3NpdGlvbjEsIHRoaXMuX29wdGlvbnMueSk7XHJcblxyXG4gICAgdGhpcy5fYm9hcmQuY3R4LmRyYXdJbWFnZSh0aGlzLl9iYWNrZ3JvdW5kLCB0aGlzLl9iZ1Bvc2l0aW9uMiwgdGhpcy5fb3B0aW9ucy55KTtcclxuXHJcbiAgICBsZXQgc3BlZWROb3JtYWxpemVkOiBudW1iZXIgPSBzcGVlZDtcclxuICAgIGxldCB3aWR0aE5vcm1hbGl6ZWQ6IG51bWJlciA9IHRoaXMuX2JhY2tncm91bmQud2lkdGg7XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XHJcblxyXG4gICAgICBzcGVlZE5vcm1hbGl6ZWQgPSAtc3BlZWROb3JtYWxpemVkO1xyXG4gICAgICB3aWR0aE5vcm1hbGl6ZWQgPSAtd2lkdGhOb3JtYWxpemVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9iZ1Bvc2l0aW9uMSAtPSBzcGVlZE5vcm1hbGl6ZWQ7XHJcbiAgICB0aGlzLl9iZ1Bvc2l0aW9uMiAtPSBzcGVlZE5vcm1hbGl6ZWQ7XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKHRoaXMuX2JnUG9zaXRpb24xKSA+IHRoaXMuX2JhY2tncm91bmQud2lkdGgpIHRoaXMuX2JnUG9zaXRpb24xID0gdGhpcy5fYmdQb3NpdGlvbjIgKyB3aWR0aE5vcm1hbGl6ZWQ7XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKHRoaXMuX2JnUG9zaXRpb24yKSA+IHRoaXMuX2JhY2tncm91bmQud2lkdGgpIHRoaXMuX2JnUG9zaXRpb24yID0gdGhpcy5fYmdQb3NpdGlvbjEgKyB3aWR0aE5vcm1hbGl6ZWQ7XHJcblxyXG4gIH1cclxuXHJcbn07Il19