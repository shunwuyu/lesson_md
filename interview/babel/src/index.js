function Foo() {
  var a = 1, b = '2', c = ''
  return (
    <div>
      <button vant="1">1</button>
      <button vant="2">1</button>
      <button vant="3">1</button>
      <button iview="4">1</button>
      <button iview={6}>1</button>
      <button iview={7}>1</button>
      <button iview={{a: 1}}>1</button>
    </div>
  )
}