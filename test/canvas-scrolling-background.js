function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck$1;

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass$1;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$1;

var Task =
/*#__PURE__*/
function () {
  /**
   * The method to be called when processing this task.
   * 
   * @property {Function}
   */

  /**
   * Indicates whether this task will only run once before being deleted or not.
   * 
    * @private
    * 
   * @property {boolean}
   */

  /**
   * If true this indicates to Hypergiant that it needs to be deleted on the next pass.
    * 
    * @private
   * 
   * @property {boolean}
   */

  /**
   * The number of times that this task has been called.
    * 
    * @private
   * 
   * @property {number}
   */

  /**
   * Indicates whether this task is currently paused or not.
   * 
   * @property {boolean}
   */

  /**
   * @param {Function} fn The method to attach to this task.
   * @param {boolean} once Indicates whether this task will only run once before being deleted or not.
   */
  function Task(fn, once) {
    classCallCheck(this, Task);

    defineProperty(this, "fn", void 0);

    defineProperty(this, "_once", void 0);

    defineProperty(this, "_delete", false);

    defineProperty(this, "_timesCalled", 0);

    defineProperty(this, "paused", false);

    this.fn = fn;
    this._once = once;
  }
  /**
   * Returns whether the task should run only once or not.
   * 
   * @returns {boolean}
   */


  createClass(Task, [{
    key: "run",

    /**
     * Runs the method associated with this task.
     * 
     * @param {...*} args Any other data that should be passed to this task.
     */
    value: function run() {
      if (this.paused) return;
      this.fn.apply(this, arguments);
      this._timesCalled++;
      if (this._once) this._delete = true;
    }
  }, {
    key: "once",
    get: function get() {
      return this._once;
    }
    /**
     * Returns whether the task should be deleted or not.
     * 
     * @returns {boolean}
     */

  }, {
    key: "delete",
    get: function get() {
      return this._delete;
    }
    /**
     * Returns the number of times that this task has been called.
     * 
     * @returns {number}
     */

  }, {
    key: "timesCalled",
    get: function get() {
      return this._timesCalled;
    }
  }]);

  return Task;
}();

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript events is that they don't rely 
 * on correct typing.
 */

var Hypergiant =
/*#__PURE__*/
function () {
  function Hypergiant() {
    classCallCheck(this, Hypergiant);

    defineProperty(this, "_tasks", new Set());
  }

  createClass(Hypergiant, [{
    key: "add",

    /**
     * Add a new signal.
     * 
     * @param {Function} fn The method that should be called when the signal is dispatched.
     * @param {boolean} [once=false] Indicates whether this signal should only be dispatched once and then deleted.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */
    value: function add(fn) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._tasks.add(new Task(fn, once));

      return this;
    }
    /**
     * Dispatch this Hypergiant event and run all of the tasks associated
     * with it along with any data passed to it.
     * 
     * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
     */

  }, {
    key: "dispatch",
    value: function dispatch() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          task.run.apply(task, arguments);
          if (task["delete"]) this._tasks["delete"](task);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Removes a task from this signal by name.
     *
     * @param {Function} task The task to remove.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "remove",
    value: function remove(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var task = _step2.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            this._tasks["delete"](task);

            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this;
    }
    /**
     * Removes all tasks from this signal.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this._tasks.clear();

      return this;
    }
    /**
     * Pauses a task attached to this signal until it is unpaused.
     * 
     * This means that the paused task will not be called and just be silent until the `enable` method is called
     * on it returning it back to its normal state.
     * 
     * @param {Function} task The task to pause.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "pause",
    value: function pause(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._tasks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var task = _step3.value;
          var taskFnToString = task.fn.toString();

          if (!task.paused && fnToString === taskFnToString) {
            task.paused = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return this;
    }
    /**
     * Resumes a task from a paused state.
     * 
     * @param {Function} task The paused task.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "resume",
    value: function resume(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._tasks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var task = _step4.value;
          var taskFnToString = task.fn.toString();

          if (task.paused && fnToString === taskFnToString) {
            task.paused = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return this;
    }
    /**
     * Makes a task a noop function.
     * 
     * @param {Function} task The task to make noop.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "noop",
    value: function noop(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this._tasks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var task = _step5.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            task.fn = function () {};

            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return this;
    }
  }, {
    key: "tasks",

    /**
     * Returns the tasks created for this signal.
     * 
     * @returns {Set<Task>}
     */
    get: function get() {
      return this._tasks;
    }
    /**
     * Returns the number of tasks currently assigned to this signal.
     * 
     * @returns {number}
     */

  }, {
    key: "numTasks",
    get: function get() {
      return this._tasks.size;
    }
  }]);

  return Hypergiant;
}();

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

    _defineProperty(this, "_loaded", new Hypergiant());

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

export default ScrollingBackground;
