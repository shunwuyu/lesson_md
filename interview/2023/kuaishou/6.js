function createRepeat(fn, repeat, interval) {
    let counter = 0;
    const intervalId = setInterval(() => {
        fn('helloWorld');
        counter++;
        if (counter === repeat) {
            clearInterval(intervalId);
        }
    }, interval);
}
  
const fn = createRepeat(console.log, 3, 2000);
