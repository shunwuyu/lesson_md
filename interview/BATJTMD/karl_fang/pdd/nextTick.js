console.log('start');

process.nextTick(() => {
  console.log('next tick');
});

console.log('end');