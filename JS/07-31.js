function trace(o, m) {
  var original = o[m];
  o[m] = function () {
    console.log(new Date(), "Entering:", m);
    var result = original.apply(this, arguments)
    console.log(new Date(), "Exiting:", m);
    return result
  }
}


function f(y) {
  console.log(this);
  console.log(y);
  
  return this.x + y
}
var o = { x: 1 }
var g = f.bind(o)
console.log(g(2))
