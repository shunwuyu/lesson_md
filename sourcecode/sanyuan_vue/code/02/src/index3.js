import { h } from 'snabbdom'

const MyComponent = props => {
  return h('h1', props.title, [h('span', props.subTitle)])
}

console.log(MyComponent({title: 'nb了', subTitle: '海海'}))