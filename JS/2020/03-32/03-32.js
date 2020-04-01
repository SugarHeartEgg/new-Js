// 解构

let [x, y] = [1, 2];
[x, y] = [x + 1, y + 1];
[x, y] = [y, x];
console.log([x, y]);


let [a, b] = [1];
console.log(a, b);

[a, b] = [1, 2, 3];
console.log(a, b);

[, a, , b] = [1, 2, 3, 4];
console.log(a, b);

// "链式" 写法
let fist, second, all;
all = [fist, second] = [1, 2, 3, 4];
console.log(fist, second, all);


// 二维数组赋值
let [one, [twoA, twoB]] = [1, [3, 4], 2];
console.log(one, twoA, twoB);


// 对象解构
let tran = {
  r: 0.0,
  g: 0.0,
  b: 0.0,
  a: 1.0
}
/**
 *  对象解构的话相对于数组有些不同，
 *  冒号左侧的对象属性名称要对应，冒号右侧的则为变量名（根据实际更改）,
 */
let { r: red, g: gree, b: blue, a: alls } = tran
console.log(red, gree, blue, alls);









