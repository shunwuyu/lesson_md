var foo = {
    name: 'Selina'
}
var name = 'Chirs';
function bar() {
    console.log(this.name);
}
bar.call(null);  // chirs