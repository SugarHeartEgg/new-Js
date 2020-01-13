var F = function () { };
// var p = F.prototype;
// var c = p.constructor;
// console.log(c === F);


// var o = new F();
// console.log(o);
// console.log(o.constructor === F)


var n = 3;
n.times(function (n) {
  console.log(n + "hello");
})
Number.prototype.times = function (f, context) {
  var n = Number(this)
  for (var i = 0; i < n; i++) f.call(context, i);
}

