// Enumerable
var obj = {};
Object.defineProperties(obj, {
    a: {
        value: 1,
        enumerable: false
    }, 
    b: {
        value: 2,
        enumerable: true
    },
    c: {
        value: 3,
        enumerable: false
    }
})

obj.d = 4;

for(var key in obj) {
  console.log(key);  
}

var arr = Object.keys(obj);
console.log(arr); 

