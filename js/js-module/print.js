define([], function (require, factory) {
  'use strict';
  return {
    print: (...arg) => {
      console.log(...arg)
    }
  }
});