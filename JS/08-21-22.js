/**
 * 检测一个对象是否是真正的函数(具有函数方法) 最好不要使用typeof ,
 * 因为一些特殊对象 得到结果不统一 , 比如 RegExp , 一些浏览器是function 一些是object
 *
 * so: isFunction()
 *
*/
"use strict"

function isFunction(x) {
  console.log(Object.prototype.toString.call(x));
  return Object.prototype.toString.call(x) === "[object Function]"
}
var a = {
  b: 2
}
var v = function () {
  return 1
}
console.log(isFunction(a));  //  ---> false
console.log(isFunction(v));  //  ---> true



/**
 *
 * 函数式
 *
 */
var square = function (x) {

