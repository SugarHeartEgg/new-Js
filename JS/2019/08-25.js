// 仅仅是初始化
function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  // 这里添加了一个方法 ， 可以用作比较数字范围  也可以用作字符串和日期的比较 返回的均是布尔值
  includes: function (x) { return this.from <= x && x <= this.to },

  //遍历提供数值范围的数字
  foreach: function (f) {
    // Math.ceil()  大于或等于给定数字的最小整数。以向上取整方式。底层的实现是十进制。
    for (var x = Math.ceil(this.from); x < this.to; x++) f(x)
  },
  toString: function () {
    return "(" + this.from + "还有" + this.to + ")"
  }
}

// 使用范围对象的一些例子

// 需要注意这里是使用new关键字来调用的
// 跟08-24-class 的方式不一样
var r = new Range(1, 3);
console.log(r.includes(2));
console.log(r.toString());

// PS: instanceof 运算符不是去检查r是不是有Range构造函数初始化的  而是检查r是否继承自Range.prototype





