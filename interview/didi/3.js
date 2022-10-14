var obj = {
  foo: 0,
  bar: 1
};

Object.observe(obj, function(changes) {
  console.log(changes);
});

obj.baz = 2;
// [{name: 'baz', object: <obj>, type: 'add'}]

obj.foo = 'hello';
// [{name: 'foo', object: <obj>, type: 'update', oldValue: 0}]

delete obj.baz;
// [{name: 'baz', object: <obj>, type: 'delete', oldValue: 2}]

// 很多 V8 中已有的优化，导致被 observed 的对象会比 non-observed 的对象慢得多