// Range 类的读取端点方法的简单封装
function Range(from, to) {
  this.from = function () {
    return from;
  };
  this.to = function () {
    return to;
  };
}
Range.prototype = {
  constructor: Range,
  includes: function (x) {
    return this.from() <= x && x <= this.to()
  },
  foreach: function (f) {
    for (var x = Math.ceil(this.from()), max = this.to(); x <= max; x++) f(x);
  },
  toString: function () {
    return "(" + this.from() + "..." + this.to() + ")"
  }
};

let r = new Range(1, 5)
r.from = function () { return 0 }


function Set() {
  this.values = {}
  this.n = 0
  // isArrayLike 类数组对象 一种常常完全合理的看法把拥有一个数值length属性和对应非整数属性的对象看做一种类型的数组。
  // 常见的类数组对象有函数中的arguments对象、HTMLCollection、NodeList等。
  if (arguments.length == 1 && isArrayLike(arguments[0])) {
    this.add.apply(this, arguments[0])
  } else if (arguments.length > 0) {
    this.add.apply(this, arguments)
  }
}

// Complex.polar = function (r, theta) {
//   return new Complex(r * Math.cos(theta), r * Math.sin(theta))
// }

Set.fromArray = function (a) {
  s = new Set()
  s.add.apply(s, a)
  return s
}

function SetFromArray(a) {
  Set.apply(this, a)
}
SetFromArray.prototype = Set.prototype

var s = new SetFromArray([1, 2, 3])
console.log(s instanceof Set)
