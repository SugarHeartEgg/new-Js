function constfunc(v) {
  return function () {
    return v
  }
}
var funcs = []
for (var i = 0; i < 10; i++) {
  funcs = constfunc(i)
}


function constfuncs() {
  var funcs = []
  for (var i = 0; i < 10; i++) {
    funcs[i] = function () {
      return i;
    }
    return funcs;
  }
}

var funcs = constfunc();



function check(args) {
  var actual = args.length;
  var expected = args.callee.length;
  if (actual !== expected) {
    throw Error("Expected " + expected + "args; got " + actual);
  }
}
function f(x, y, z) {
  check(arguments)
  return x + y + z;
}
f(1, 2, 3)



