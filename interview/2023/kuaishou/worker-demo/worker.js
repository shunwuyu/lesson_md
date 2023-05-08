self.addEventListener('message', (event) => {
    const message = event.data;
    const result = message + ' World!';
    self.postMessage(result);
  });