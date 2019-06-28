// invoke a function with the provided arguments, returning either the result or the caught error object.
const ary = (fn , n) => (...args) => fn(...args.slice(0, n));
const firstTwoMax = ary(Math.max, 2);
console.log([[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)));
