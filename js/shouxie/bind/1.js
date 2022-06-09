// var a = {
//     name : "Cherry",

//     func1: function () {
//         console.log(this.name)
//     },

//     func2: function () {
//         setTimeout(  function () {
//             this.func1()
//         }.bind(a),100);
//     }

// };

// a.func2() 

var a ={
    name : "Cherry",
    fn : function (a,b) {
        console.log( a + b)
    }
}

var b = a.fn;
b.bind(a,1,2)()

