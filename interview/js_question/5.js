// LazyMan('Tony');
// LazyMan('Tony').sleep(10).eat('lunch');
class LazyManClass {
  constructor(name) {
    this.taskList = [];
    this.name = name;
    console.log(`Hi I am ${this.name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }
  sleep (time) {
    var that = this
    var fn = (function (t) {
        return function () {
            setTimeout(() => {
                console.log(`等待了${t}秒...`)
                that.next();
            }, t * 1000); 
        }
    })(time);
    this.taskList.push(fn);
    return this;
  }
  next () {
    var fn = this.taskList.shift();
    fn && fn();
  }
  eat (name) {
    var that = this;
    var fn = (function (n) {
        return function () {
            console.log(`I am eating ${n}`)
            that.next();
        }
    })(name);
    this.taskList.push(fn);
    return this;
  } 
  sleepFirst (time) {
    var that = this;
    var fn = (function (t) {
        return function () {
            setTimeout(() => {
                console.log(`等待了${t}秒...`)
                that.next();
            }, t * 1000);  
        }
    })(time);
    this.taskList.unshift(fn);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// LazyMan('Tony')
// LazyMan('Tony').sleep(10).eat('lunch');
// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');