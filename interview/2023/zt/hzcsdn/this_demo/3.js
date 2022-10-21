const obj = {
    radius: 10,  
    diameter() {    
        return this.radius * 2
    },  
    perimeter: () => 2 * Math.PI * this.radius
}
console.log(obj.diameter())    // 20
console.log(obj.perimeter())    // NaN
