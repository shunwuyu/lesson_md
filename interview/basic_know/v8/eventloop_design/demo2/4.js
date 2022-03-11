const asyncFunc = () => {
  setTimeout(() => {
    console.log(2);
  }, 2000);
}

console.log(1);
asyncFunc();
console.log(3);