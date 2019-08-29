/**
 * 
 * 高阶函数
 * 
 * 操作函数的函数
 * 
 */
function not(f) {
  return function () {
    var result = f.apply(this, arguments);
    return !result
  }
}
var even = function (x) {
  return x % 2 === 0
}
var odd = not(even)
var arr = [1, 1, 3, 5, 5];

//every测试一组数组的所有元素 能否通过某个指定函数的测试  结果为boolean类型 .
console.log(arr.every(odd));



/**
 * 
 * 
 * 
 * 
 */


function mapper(f) {
  return function (a) { return map(a, f) }
}
var increment = function (x) {
  return x + 1
}
var incrementer = mapper(increment);
// console.log(incrementer([1, 2, 3]));


/**
 *
 *  有括号运算符的先执行括号里面内容 , 
 *  
 */
function compose(f, g) {
  return function () {
    console.log(this);  // window
    console.log(arguments); // 实参数组
    console.log(g.apply(this, arguments)); // 5
    return f.call(this, g.apply(this, arguments));
  }
}
var square = function (x) {
  console.log(x);  // 5
  return x * x
};
var sum = function (x, y) {
  console.log(x);  // 2
  console.log(y);  // 3
  return x + y
};
var squareofsum = compose(square, sum)
console.log(squareofsum(2, 3));

