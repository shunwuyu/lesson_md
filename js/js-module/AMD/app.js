requirejs.config({
  baseUrl: '',
  paths: {
    print: './print',
    util: './util',
    custommodule: './module'
  }
});
// require(['print'], (print) => {
//   // console.log(print);
//   document.getElementById('btn').addEventListener('click', function() {
//     // require(, () => {
//       print.print(1);
//     // })
//   })
// })
require(['custommodule'], (custommodule) => {
  // custommodule.hello();
})