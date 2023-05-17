console.log('Interesting!!!')
// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'
console.log(a); // 这一行会报错
// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)
