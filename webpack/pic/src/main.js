import './styles/main.css'
import './styles/main.styl'

let $body = document.querySelector('body')
let $imgWrapper = document.createElement('div')

let smallImgNames = ['love', 'arrow', 'add', 'search', 'share'];
smallImgNames.forEach(name => {
  let img = new Image()
  img.src = require(`./imgs/${name}.png`)
  $imgWrapper.append(img)
})

$body.append($imgWrapper)