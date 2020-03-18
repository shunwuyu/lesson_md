export default {
  doLogin({account, password}, cb) {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        account,
        password
      })
    })
    .then(response => response.json())
    .then(data => {
      cb(data)
    })
  }
}