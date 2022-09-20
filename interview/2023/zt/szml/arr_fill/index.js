const myFil=(ary)=>{
    return ary.filter(item => item.a!= "3").map(item => item.a).reduce((item,index) => item + "" + index)
} 
console.log(myFil([{a:'2'},{a:'3'},{a:'5'},{a:'7'}]))