(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/PostCard/index"],{

/***/ "./src/components/PostCard/index.css":
/*!*******************************************!*\
  !*** ./src/components/PostCard/index.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/PostCard/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/PostCard/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.css */ "./src/components/PostCard/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostCard = (_temp2 = _class = function (_Taro$Component) {
  _inherits(PostCard, _Taro$Component);

  function PostCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCard.__proto__ || Object.getPrototypeOf(PostCard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["props", "title", "content"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostCard, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(PostCard.prototype.__proto__ || Object.getPrototypeOf(PostCard.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var props = this.__props;

      var handleClick = function handleClick() {
        if (props.isList) {
          var _props = _this2.__props,
              title = _props.title,
              content = _props.content;

          _taroWeapp2.default.navigateTo({
            url: "/pages/post/post?title=" + title + "&content=" + content
          });
        }
      };
      this.anonymousFunc0 = handleClick;
      Object.assign(this.__state, {
        props: props
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return PostCard;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "components/PostCard/index", _temp2);
exports.default = PostCard;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(PostCard));

/***/ })

},[["./src/components/PostCard/index.jsx","runtime","vendors"]]]);