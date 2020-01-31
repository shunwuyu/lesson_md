"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var a = function a() {
  return 789;
};

a();

var Man =
/*#__PURE__*/
function () {
  function Man() {
    (0, _classCallCheck2.default)(this, Man);
  }

  (0, _createClass2.default)(Man, [{
    key: "say",
    value: function say() {
      console.log('say------');
    }
  }]);
  return Man;
}();

var man = new Man();
man.say();