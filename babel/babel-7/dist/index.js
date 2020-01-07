"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("core-js/stable");

require("regenerator-runtime/runtime");

// index.js
// import "@babel/polyfill";
// import 'core-js/stable';
var f = function f() {};

new Promise();

var Test =
/*#__PURE__*/
function () {
  function Test() {
    (0, _classCallCheck2.default)(this, Test);
  }

  (0, _createClass2.default)(Test, [{
    key: "say",
    value: function say() {
      console.log('say------');
    }
  }]);
  return Test;
}();

var set = new Set([1, 2, 3]);
[1, 2, 3].includes(2);