// 我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。
var arr:number[] = [2, 1]; // 数组类型
var mytuple = [10,"Runoob"]; // 移上去看看


// 它能够给一系列数值集合提供友好的名称
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let colorName: string = Color[2];
let colorName2: string = Color[Color.Green];

// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false
let list: any[] = [1, true, "free"];

// void类型像是与any类型相反，它表示没有任何类型。
function warnUser(): void {
  console.log("This is my warning message");
  // return 1
}