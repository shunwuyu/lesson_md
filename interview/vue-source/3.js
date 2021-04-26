// Snabbdom 性能强大的虚拟 DOM 库
const { h } =  require('snabbdom');

const MyComponent = props => {
  return h('h1', props.title, [
    h('span', {style: {fontWeight: 'bold'}}, 'This is bold')
  ])
}

console.log(MyComponent({title: 'hello'}));