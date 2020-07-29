const usernameEle = document.getElementById('username');
usernameEle.addEventListener('input', function() {
  if (this.value.trim() ) {
    this.parentNode.querySelector('.icon').style.display = 'inline';
  } else {
    this.parentNode.querySelector('.icon').style.display = 'none';
  }
})

