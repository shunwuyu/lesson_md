var assert = require("assert");
var add = require("../src/writeFile.js").add;

// it("1加1等于2", function()
// {
//     let result = add(1, 2);
//     assert.equal(result, 3);
// });

var rewire = require("rewire");
var myModule = rewire("../src/operation.js");
var add = myModule.add;

var fsMock = {
    writeFileSync: function(file, data, option) { /* 啥也不干 */ }
};

myModule.__set__("fs", fsMock);

it("1加3等于4", function()
{
    let result = add(1, 3);
    assert.equal(result, 4);
});