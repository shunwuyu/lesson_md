requirejs.config({
  baseUrl: '',
  paths: {
    print: './print'
  }
});
require([], () => {
  // console.log(print);
  document.getElementById('btn').addEventListener('click', function() {
    require(['print'], (print) => {
      print.print(1);
    })
  })
})