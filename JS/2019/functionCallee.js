let o = function (x) {
  if (x <= 1) return 1
  console.log(x);
  // 通过callee方法  递归的调用自己
  return x * arguments.callee(x - 1)
}
console.log(o(3));