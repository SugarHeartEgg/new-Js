"use strict"


/**
 * 
 * 这样写的构造函数
 * Function()参数是可以是任意数量字符串实参 , 
 * 最后一个则是函数体
 * 
 * 不要实参 只要函数体 , 则直接写函数体即可 .
 * 
 * PS:
 *    已Function构造函数创建的函数 , 没有作用域 .
 *     代码编译是在全局下编译的
 */
var f = Function("x", "y", "return x*y");

var v = Function("return 2");

var str = "Hi";
function construtFunction() {
  var str = "hello";
  return new Function("return str") // 无法捕获局部作用域
}
// 所返回的函数使用的不是局部作用域 , Function捕获的是全局作用域
console.log(construtFunction()())  // ==> Hi







