const arr = [1,2];
arr.push(3);
console.log(arr);
console.log(arr.push(4, 5));
console.log(arr);

// let arr = [1, 2];
// Array.prototype.push2 = function() {
//     // console.log(arguments, '////');
//     console.log(this, this.length);
// 	for( let i = 0 ; i < arguments.length ; i++){
// 		this[this.length] = arguments[i] ;
// 	}
// 	return this.length;
// }

// arr.push2(4,5,6);