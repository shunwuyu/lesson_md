(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/float-layout/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/float-layout/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/float-layout/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /* eslint-disable taro/function-naming */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtFloatLayout = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtFloatLayout, _AtComponent);

  function AtFloatLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtFloatLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtFloatLayout.__proto__ || Object.getPrototypeOf(AtFloatLayout)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["rootClass", "title", "scrollY", "scrollX", "scrollTop", "scrollLeft", "upperThreshold", "lowerThreshold", "scrollWithAnimation", "_isOpened", "isOpened", "className", "children"], _this.handleClose = function () {
      if ((0, _isFunction3.default)(_this.props.onClose)) {
        _this.props.onClose();
      }
    }, _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    }, _this.handleTouchMove = function (e) {
      e.stopPropagation();
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtFloatLayout, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtFloatLayout.prototype.__proto__ || Object.getPrototypeOf(AtFloatLayout.prototype), '_constructor', this).apply(this, arguments);

      var isOpened = props.isOpened;

      this.state = {
        _isOpened: isOpened
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;


      if (this.props.isOpened !== isOpened) {
        (0, _utils.handleTouchScroll)(isOpened);
      }

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _isOpened = this.__state._isOpened;
      var _props = this.__props,
          title = _props.title,
          scrollY = _props.scrollY,
          scrollX = _props.scrollX,
          scrollTop = _props.scrollTop,
          scrollLeft = _props.scrollLeft,
          upperThreshold = _props.upperThreshold,
          lowerThreshold = _props.lowerThreshold,
          scrollWithAnimation = _props.scrollWithAnimation;


      var rootClass = (0, _classnames2.default)('at-float-layout', {
        'at-float-layout--active': _isOpened
      }, this.__props.className);

      Object.assign(this.__state, {
        rootClass: rootClass,
        title: title,
        scrollY: scrollY,
        scrollX: scrollX,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        upperThreshold: upperThreshold,
        lowerThreshold: lowerThreshold,
        scrollWithAnimation: scrollWithAnimation
      });
      return this.__state;
    }
  }, {
    key: 'funPrivatebzzzz',
    value: function funPrivatebzzzz() {
      return this.props.onScroll.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: 'funPrivateczzzz',
    value: function funPrivateczzzz() {
      return this.props.onScrollToLower.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: 'funPrivatedzzzz',
    value: function funPrivatedzzzz() {
      return this.props.onScrollToUpper.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return AtFloatLayout;
}(_component2.default), _class.$$events = ["handleTouchMove", "close", "funPrivatebzzzz", "funPrivateczzzz", "funPrivatedzzzz"], _class.$$componentPath = "Users/shunwuyu/lesson/lesson_md/taro/ultra-club/node_modules/taro-ui/dist/weapp/components/float-layout/index", _temp2);


AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,

  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false,

  onClose: function onClose() {},
  onScroll: function onScroll() {},
  onScrollToLower: function onScrollToLower() {},
  onScrollToUpper: function onScrollToUpper() {}
};

AtFloatLayout.propType = {
  title: _propTypes2.default.string,
  isOpened: _propTypes2.default.bool,
  scrollY: _propTypes2.default.bool,
  scrollX: _propTypes2.default.bool,
  scrollTop: _propTypes2.default.number,
  scrollLeft: _propTypes2.default.number,
  upperThreshold: _propTypes2.default.number,
  lowerThreshold: _propTypes2.default.number,
  scrollWithAnimation: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  onScrollToLower: _propTypes2.default.func,
  onScrollToUpper: _propTypes2.default.func
};
exports.default = AtFloatLayout;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtFloatLayout));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/float-layout/index.js","runtime","vendors"]]]);