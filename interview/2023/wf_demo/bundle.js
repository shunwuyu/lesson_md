
    (function(modules) {
      function require(id) {
        const module = { exports : {} }
        modules[id](module, module.exports, require)
        return module.exports
      }
      require('./entry.js')
    })({'./entry.js': (
            function (module, exports, require) { "use strict";

var _b = _interopRequireDefault(require("./b.js"));

require("./common.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_b["default"]);
var a = 1 + _b["default"].b;
console.log(a); }
        ),'./b.js': (
            function (module, exports, require) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  b: 2
};
exports["default"] = _default; }
        ),'./common.css': (
            function (module, exports, require) { 
                const style = document.createElement('style')
                style.innerText = "body {    margin: 0;    padding: 0;    height: 100vh;    background-color: pink;}"
                document.head.appendChild(style)
                 }
        ),})
  