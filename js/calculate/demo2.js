var PerformanceS = function() {}
PerformanceS.prototype.calculate = function(salary) {
  return salary * 4;
}

var PerformanceA = function() {}
PerformanceA.prototype.calculate = function(salary) {
  return salary * 3;
}

var PerformanceB = function() {}
PerformanceB.prototype.calculate = function(salary) {
  return salary * 2;
}

var Bonus = function() {
  this.salary = null;
  this.strategy = null;
}

Bonus.prototype.setSalary = function(salary) {
  this.salary = salary;
}

Bonus.prototype.setStrategy = function(strategy) {
  this.strategy = strategy;
}

Bonus.prototype.getBonus = function() {
  return this.strategy.calculate(this.salary);
}

var bonus = new Bonus();

bonus.setSalary(10000);
bonus.setStrategy(new PerformanceS());
console.log(bonus.getBonus());
