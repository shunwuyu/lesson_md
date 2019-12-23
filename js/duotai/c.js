var makeSound = function(animal) {
  if(animal instanceof Duck) {
      console.log('嘎嘎嘎');
  } else if (animal instanceof Chicken) {
      console.log('咯咯咯');
  }
}

var Duck = function(){}
var Chicken = function() {};
makeSound(new Chicken());
makeSound(new Duck());
