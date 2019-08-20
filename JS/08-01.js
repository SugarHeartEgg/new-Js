var sb = function f() {
  return 1 + 1
}


var f = new Function("x", "y", "return x*y;");
console.log(f);

var f = function (x, y) {
  return x * y
}


var scope = "连帅恒 Or 黄帅武";
function Lian() {
  var scope = "李老板 Or 揭静香 Or 胖嘉豪"
  return new Function("return scope")
}
Lian()()

function isFunction(x) {
  return Object.prototype.toString.call(x) === "[Object Function]"
}

var data = [1, 1, 3, 5, 5]
var sum = function (x, y) { return x + y; }
var square = function (x) { return x * x }
var mean = reduce(data, sum) / data.length
var deviations = map(data, function (x) { return x - mean })
var stddev = Math.sqrt(reduce(map(deviations, square), sum) / (data.length - 1))


// 高程  看到了   196  页


