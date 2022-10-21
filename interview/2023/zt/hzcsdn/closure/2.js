function Singleton(){
    this.data = 'singleton';
}
  
Singleton.getInstance = (function () {
    var instance;
    
    return function(){
        if (instance) {
            return instance;
        } else {
        instance = new Singleton();
            return instance;
        }
    }
})();
  
  var sa = Singleton.getInstance();
  var sb = Singleton.getInstance();
  console.log(sa === sb); // true
  console.log(sa.data);