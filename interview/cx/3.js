function createFlow(effects = []) {
  let sources = effects.slice().flat();

  function run(callback) {
    while(sources.length) {
      const task = sources.shift();
      // 把callback放到下一个flow的callback时机里执行
      const next = () => createFlow(sources).run(callback)
      if (typeof task === 'function') {
        const res = task();
        if (res?.then) {
          res.then(next);
          return ;
        }
      } else if (task?.isFlow) {
        task.run(next);
        return;
      }
    }
    callback?.();
  }

  return {
    run,
    isFlow: true
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subFlow = createFlow([() => delay(1000).then(() => console.log("c"))]);

createFlow([
  () => console.log("a"),
  () => console.log("b"),
  subFlow,
  [() => delay(1000).then(() => console.log("d")), () => console.log("e")],
]).run();
