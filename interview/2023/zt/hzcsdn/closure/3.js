// 模拟私有属性

function getGeneratorFunc () {
    // 不能修改
    var _name = 'John';
    var _age = 22;
      
    return function () {
      return {
        getName: function () {return _name;},
        getAge: function() {return _age;}
      };
    };
  }
  
  var obj = getGeneratorFunc()();
  obj.getName(); // John
  obj.getAge(); // 22
  obj._age; // undefined
  