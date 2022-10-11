const clone = require('./7')

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target; // RangeError: Maximum call stack size exceeded

console.log(clone(target));