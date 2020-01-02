"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

// index.js
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
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