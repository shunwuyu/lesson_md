define(['util'], function (util) {
  'use strict';
  console.log(util.date());
  return {
    print: (...arg) => {
      console.log(...arg)
    }
  }
});