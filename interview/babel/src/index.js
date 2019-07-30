import Bar from './foo';
function Foo() {
  var a = 1, b = '2', c = ''
  return (
    <div>
      <Bar iview={4}/>
      <button iview="2">1</button>
      <button iview={3}>1</button>
    </div>
  )
}