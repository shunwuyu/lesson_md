const fetch = require('node-fetch');
const getData = async () => {
  const data = await fetch('https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction', {
    headers: {
      'content-type': 'application/json',
    },
    method: 'GET',
  }).then(res => res.json())
}
getData();