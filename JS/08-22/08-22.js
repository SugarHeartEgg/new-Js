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