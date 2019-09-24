'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.command('install') //加命令 
.description('install template').alias('i').action(function () {
  (0, _install2.default)();
});

_commander2.default.version(_constants.VERSION, '-v --version').parse(process.argv);