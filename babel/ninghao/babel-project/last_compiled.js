"use strict";

require('@babel/polyfill');

var array = [1, 2, 3, 4, 5, 6];
array.includes(function (item) {
  return item > 2;
});
new Promise();
