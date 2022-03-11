const syncFunc = () => {
  const time = new Date().getTime();
  while(true) {
    if(new Date().getTime() - time > 2000) {
      break;
    }
  }
  console.log(2);
}

console.log(1);
syncFunc();
console.log(3);