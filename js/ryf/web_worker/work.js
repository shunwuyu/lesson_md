addEventListener('message', function (e) {
  // console.log(e);
  self.postMessage('You said: ' + e.data);
}, false);