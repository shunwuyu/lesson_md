const oContent = document.querySelector('#content');
const tabLinks = document.querySelectorAll('.tabbar a');

tabLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('selected');
    oContent.innerHTML = event.target.innerText;
  }, false);
})
window.onload = function() {
  tabLinks[0].click();
}

