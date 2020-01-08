(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/message/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/message/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/message/index.js ***!
  \*********************************************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtMessage = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtMessage, _AtComponent);

  function AtMessage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtMessage.__proto__ || Object.getPrototypeOf(AtMessage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "rootCls", "_message", "_isOpened", "_type", "_duration", "__fn_on", "className", "customStyle"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtMessage, [{
    key: '_constructor',
    value: function _constructor() {
      _get(AtMessage.prototype.__proto__ || Object.getPrototypeOf(AtMessage.prototype), '_constructor', this).apply(this, arguments);
      this.state = {
        _isOpened: false,
        _message: '',
        _type: 'info',
        _duration: 3000
      };
      this._timer = null;
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'bindMessageListener',
    value: function bindMessageListener() {
      var _this2 = this;

      _taroWeapp2.default.eventCenter.on('atMessage', function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var message = options.message,
            type = options.type,
            duration = options.duration;

        var newState = {
          _isOpened: true,
          _message: message,
          _type: type,
          _duration: duration || _this2.state._duration
        };
        _this2.setState(newState, function () {
          clearTimeout(_this2._timer);
          _this2._timer = setTimeout(function () {
            _this2.setState({
              _isOpened: false
            });
          }, _this2.state._duration);
        });
      });
      // 绑定函数
      _taroWeapp2.default.atMessage = _taroWeapp2.default.eventCenter.trigger.bind(_taroWeapp2.default.eventCenter, 'atMessage');
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      this.bindMessageListener();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindMessageListener();
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {
      _taroWeapp2.default.eventCenter.off('atMessage');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _taroWeapp2.default.eventCenter.off('atMessage');
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          className = _props.className,
          customStyle = _props.customStyle;
      var _state = this.__state,
          _message = _state._message,
          _isOpened = _state._isOpened,
          _type = _state._type;

      var rootCls = (0, _classnames2.default)({
        'at-message': true,
        'at-message--show': _isOpened,
        'at-message--hidden': !_isOpened
      }, "at-message--" + _type, className);

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        rootCls: rootCls
      });
      return this.__state;
    }
  }]);

  return AtMessage;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "Users/shunwuyu/lesson/lesson_md/taro/ultra-club/node_modules/taro-ui/dist/weapp/components/message/index", _temp2);


AtMessage.defaultProps = {
  customStyle: '',
  className: ''
};

AtMessage.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string])
};
exports.default = AtMessage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtMessage));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/message/index.js","runtime","vendors"]]]);