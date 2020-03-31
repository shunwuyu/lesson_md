const app = {
  // 串联 下标
  middlewares: [],
  use(fn) {
    this.middlewares.push(fn)
  }
}

app.compose = function (middlewares) {
  // 串联每个函数，使用下标递增，并递归至最后一个函数结束
  return async function() {
    await  dispath(0);
    async function dispath(idx) {
      // console.log(idx, app.middlewares.length, '+++++++');
      if (idx === app.middlewares.length) return;

      const fn = app.middlewares[idx];
      // console.log(Object.prototype.toString.call(fn), '//////')
      await fn(function next() {
        dispath(idx + 1);
      });
    }
  }
}

app.use(function (next) {
  console.log(1);
  next();
  console.log(1.1)
})

app.use(function (next) {
  console.log(2);
  next();
  console.log(2.2);
})
app.use(function (next) {
  console.log(3);
  next();
  console.log(3.3);
});

app.compose()(); 