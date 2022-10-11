const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(1000)
  .then(data => {
    console.log('over');
  })