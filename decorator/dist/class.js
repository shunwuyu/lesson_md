"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function classDecorator(className) {
  className.flag = true;
  return className;
}

var Man = classDecorator(_class = function Man() {
  _classCallCheck(this, Man);
}) || _class;

console.log(Man.flag);