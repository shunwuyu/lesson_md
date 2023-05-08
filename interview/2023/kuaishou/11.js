let globalVar = "global variable";

function outerFunction() {
  let outerVar = "outer variable";
  
  function innerFunction() {
    let innerVar = "inner variable";
    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }
  
  innerFunction();
}

outerFunction();

