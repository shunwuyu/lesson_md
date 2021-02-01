function timedCount () {
  for (var i = 0; i < 10000000000; i++) {
    if (i % 100000 === 0) {
      postMessage(i);
    }
  }
}

timedCount();