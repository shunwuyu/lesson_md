import Foo from './foo';
import Bar from './bar';
function App() {
  return (
    <div>
      <Foo iview={4}/>
      <Bar iview={100}/>
      <button iview="2">1</button>
      <button iview={3}>1</button>
    </div>
  )
}