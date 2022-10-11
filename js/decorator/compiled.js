"use strict";

var _class, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyClass = annotation(_class = function MyClass() {
  _classCallCheck(this, MyClass);
}) || _class;

function annotation(target) {
  target.annotated = true;
}

var Person = (_class2 = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: "name",
    value: function name() {
      return "".concat(this.first, " ").concat(this.last);
    }
  }]);

  return Person;
}(), (_applyDecoratedDescriptor(_class2.prototype, "name", [readonly], Object.getOwnPropertyDescriptor(_class2.prototype, "name"), _class2.prototype)), _class2);

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
