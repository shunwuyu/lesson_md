function classDecorator(className) {
  className.flag = true;
  return className;
}

@classDecorator
class Man{
}
console.log(Man.flag);