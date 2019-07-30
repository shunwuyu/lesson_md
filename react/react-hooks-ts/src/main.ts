new Promise((resolve, reject) => {
  resolve();
})
document.write("Hello from main.ts !");
const brunch = new Set();
  // as people start coming in
brunch.add('wes');
brunch.add('Sarah');
brunch.add('Simone');
const line = brunch.values();
alert(line.next().value);