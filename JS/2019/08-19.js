/**
 *
 * 还是务实一点 , 回归到本质 .
 * 踏踏实实的
 *
 */

'use strict'


var a = "";
a = a || []

// 回顾:
// || 可以当做if来判断 , 前提条件是 , 判断体需要提前申明 , 不然会报引用错误 .



// 什么情况下会造成 , 内存泄漏 ?
// 解: 当DOM对象和javaScript之间存在循环引用时 ;


function counter() {
  var n = 0;
  return {
    count: function () { return n++ },
    reset: function () { n = 0 }
  };
}
var c = counter(), d = counter()
console.log(c);
console.log(d);

c.count()  // =>  0
d.count()  // =>  0

c.reset()  // c调用函数重置了n

console.log(c.count()) // => 0 因为上述被重置的原因 , 所以为0
console.log(d.count()) // => 1 c d两个函数是脱离开的 , 依据上次调用的原因 , 此时的 n 为 1


/**
 * 
 * 当cinstfuncs函数返回时 , 变量i的值是10 , 
 * 所有闭包都共享这个值 , 因此数组不管哪一个函数都是同一个值 , 
 * 
 */
function constfuncs() {
  var funcs = [];
  for (var i = 0; i < 10; i++) {
    funcs[i] = function () { return i }
    console.log(funcs[i]);

  }
  console.log(funcs);
  return funcs;
}
var funcs = constfuncs();
console.log(funcs);
console.log(funcs[5]());




/**
 * 
 * 
 * callee期望的实参个数 , 严格模式下不工作
 * 
 */
function name(params) {
  params.length
  console.log(arguments);
}
name(1, 2)



function f(y, z) {
  console.log(this.x);
  return this.x + y + z
}
var g = f.bind({ x: 1 }, 2)
console.log(g(3));