(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray0", "$compid__1", "$compid__2", "$compid__3", "posts"], _this.customComponents = ["AtMessage", "PostCard", "AtFloatLayout", "PostForm", "AtFab"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__1"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1 = _genCompid2[0],
          $compid__1 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__2"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__2 = _genCompid4[0],
          $compid__2 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__3"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__3 = _genCompid6[0],
          $compid__3 = _genCompid6[1];

      var _useState = (0, _taroWeapp.useState)([{
        title: '泰罗奥特曼',
        content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。'
      }]),
          _useState2 = _slicedToArray(_useState, 2),
          posts = _useState2[0],
          setPosts = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          formTitle = _useState4[0],
          setFormTitle = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          formContent = _useState6[0],
          setFormContent = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          isOpened = _useState8[0],
          setIsOpened = _useState8[1];

      function handleSubmit(e) {
        e.preventDefault();

        var newPosts = posts.concat({ title: formTitle, content: formContent });
        setPosts(newPosts);
        setFormTitle('');
        setFormContent('');
        setIsOpened(false);
        _taroWeapp2.default.atMessage({
          message: '发表文章成功',
          type: 'success'
        });
      }

      this.anonymousFunc0 = function () {
        return setIsOpened(false);
      };

      var anonymousState__temp = function anonymousState__temp(e) {
        return handleSubmit(e);
      };

      var anonymousState__temp2 = function anonymousState__temp2(e) {
        return setFormTitle(e.target.value);
      };

      var anonymousState__temp3 = function anonymousState__temp3(e) {
        return setFormContent(e.target.value);
      };

      this.anonymousFunc1 = function () {
        return setIsOpened(true);
      };

      var loopArray0 = posts.map(function (post, index) {
        post = {
          $original: (0, _taroWeapp.internal_get_original)(post)
        };

        var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + 'azzzzzzzzz' + index, true),
            _genCompid8 = _slicedToArray(_genCompid7, 2),
            $prevCompid__0 = _genCompid8[0],
            $compid__0 = _genCompid8[1];

        _taroWeapp.propsManager.set({
          "title": post.$original.title,
          "content": post.$original.content,
          "isList": true
        }, $compid__0, $prevCompid__0);
        return {
          $compid__0: $compid__0,
          $original: post.$original
        };
      });
      _taroWeapp.propsManager.set({
        "isOpened": isOpened,
        "title": '\u53D1\u8868\u65B0\u6587\u7AE0',
        "onClose": this.anonymousFunc0
      }, $compid__1, $prevCompid__1);
      _taroWeapp.propsManager.set({
        "formTitle": formTitle,
        "formContent": formContent,
        "handleSubmit": anonymousState__temp,
        "handleTitleInput": anonymousState__temp2,
        "handleContentInput": anonymousState__temp3
      }, $compid__2, $prevCompid__2);
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc1
      }, $compid__3, $prevCompid__3);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray0: loopArray0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3,
        posts: posts
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/index/index", _temp2);


Index.config = { navigationBarTitleText: '首页' };
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ })

},[["./src/pages/index/index.jsx","runtime","vendors"]]]);