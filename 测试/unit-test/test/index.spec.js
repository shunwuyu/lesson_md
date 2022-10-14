const util = require('../src/index.js');
console.log(util);
// 测试用例组
describe("equal", function() {
  it("should equal", function() {
    expect(util.add(1, 2)).toBe(3);
  });
  it("test promise", function() {
    return util.testPromise().then(res => {
      expect(res).toBe('ok');
    })
  });
});