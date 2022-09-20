function myCalculator(init) {
    const that = this
    that.num = init || 0
    myCalculator.prototype.plus = function(num) {
        that.num += +num;
        return myCalculator.prototype
    }
    myCalculator.prototype.minus = function(num) {
        that.num -= +num;
        return myCalculator.prototype
    }
    myCalculator.prototype.times = function(num) {
        that.num *= +num;
        return myCalculator.prototype
    }
    myCalculator.prototype.dividedBy = function(num) {
        that.num /= +num;
        return myCalculator.prototype
    }
    myCalculator.prototype.equals = function() {
        return that.num
    }
    return myCalculator.prototype
}

console.log(myCalculator(1).plus(1).times(3).equals());