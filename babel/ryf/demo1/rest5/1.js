"use strict";

var func = function func() {
  var _console;

  (_console = console).log.apply(_console, arguments);
};

func(1, 2, 3);