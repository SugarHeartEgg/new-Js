var obj1 = function f(x, y) {
  console.log(arguments.length);
  if (arguments.length != 3) {
    console.log(true);
  }
}
// obj1("我是", "测试")

function max() {
  // 不定实参函数
  // 遍历实参  记住最大值
  var max = Number.NEGATIVE_INFINITY;
  console.log(max);

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      console.log(arguments[i]);
      max = arguments[i]
    }
  }
  return max
}
var alrgest = max(1, 100, 200, 120, 150, 300, 400)
// console.log(alrgest);
function f(x) {
  
  "use strict";
  // 在严格模式下 arguments  就是保留字了  是无法进行  赋值  或是  作为形参  或是  局部变量名

  // 因为实参对象不是  普通数组所以  第二条的log语句可以修改成功  不然是绝对不会是null的
  console.log(x)
  arguments[0] = null
  console.log(x);
}
f("我是")


