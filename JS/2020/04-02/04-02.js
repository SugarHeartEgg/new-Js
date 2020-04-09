/**
 * 生成器 yield
 * 也是通过 function 关键之声明的
 * typeof 运算符返回 "function"
 * 也是可以从 Function.prototype 继承属性和方法
 * 但是返回的不是 执行的函数体  而是返回一个生成器对象
 *
*/

function range(min, max) {
  for (let i = Math.ceil(min); i <= max; i++) {
    yield i;
  }
}

for (let n in range(3, 8)) console.log(n);



/**
 * 数组推导
 * 数组推导是非标准的。
 * 以后应该用
 * Array.prototype.map，
 * Array.prototype.filter，
 * 箭头函数和展开语法.。
 * 
 * 数组推导式是一种 JavaScript 表达式语法，使用它，
 * 你可以在一个原有数组的基础上快速的构造出一个新的数组。
 * 但是它已经从标准和火狐中移除。不要用它！
 * url(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Array_comprehensions)
 */

// let evensquares = [x * x for (x in range(0, 10)) if (x % 2 === 0)]
