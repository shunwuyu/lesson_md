var id = 0;

function generateID() {
  return ++id;
}

function Restaurant(attr) {
  this.cash = attr.cash;
  this.seats = attr.seats;
  this.staff = attr.staff;
}

Restaurant.prototype.hire = function(staff) {
  this.staff.push(staff);
}
Restaurant.prototype.fire = function(staff) {
  this.staff = this.staff.filter(function(el) {
    return el !== staff;
  });
}

function Staff(name, salary) {
  this.id = generateID();
  this.name = name;
  this.salary = salary;
}

Staff.prototype.work = function () {
}

function Waiter(name, salary) {
  Staff.call(this, name, salary);
  this.title = "服务员";
}

Waiter.prototype = Staff.prototype;
Waiter.prototype.construstor = Waiter;
Waiter.prototype.serve = function (orderlist) {
  // console.log(orderlist);
    if (Array.isArray(orderlist)) {
        this.list = orderlist;
        var arr = [];
        // console.log()
        for (let item of this.list) {
          arr.push(item.dishname);
        }
        console.log('您点的菜是' + arr.join(' '));
    } else {
        console.log("上菜");
    }
}


function Cook(name, salary) {
  Staff.call(this, name, salary);
  this.title = "厨师";
}

// Cook.prototype = new Staff();
Cook.prototype = Staff.prototype;
// console.log(Cook.prototype.construstor);
Cook.prototype.construstor = Cook;
Cook.prototype.serve = function () {
  console.log("烹饪");
}

function Customer() {
 
}
Customer.prototype.order = function (dishes) {
    // console.log('点');
    // let str = "点";
    let arr = [];
    for (let dish of dishes) {
      console.log(dish.dishname);
      arr.push(dish.dishname);
    }
    console.log('点' + arr.join(' '));
    
}
Customer.prototype.eat = function () {
    console.log("吃菜");
}

function Dish(dishname, cost, price) {
  this.dishname = dishname;
  this.cost = cost;
  this.price = price;
}

var ifeRestaurant = new Restaurant({
  cash: 1000000,
  seats: 20,
  staff: []
});


var ifeRestaurant = new Restaurant({
  cash: 1000000,
  seats: 20,
  staff: []
});

var cookTony = new Cook("Tony", 10000);
var cookJames = new Cook("James", 10000);
var waiterS = new Waiter("赵建国", 3000);
ifeRestaurant.hire(cookTony);
ifeRestaurant.hire(cookJames);

// console.log(ifeRestaurant.staff);
// ifeRestaurant.fire(cookJames);
// console.log(ifeRestaurant.staff);

var customerYu = new Customer();
var gbr = new Dish("锅包肉", 20, 40);
var shy = new Dish("松花鱼", 30, 60);
customerYu.order([gbr, shy]);
cookTony.serve();
waiterS.serve([gbr, shy]);
waiterS.serve();
