var scope = "global scope";

function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f
}

console.log(checkscope()())



var uniqueInteger = (function () {
  var counter = 0;
  return function () {
    return counter++
  }
}())
console.log(uniqueInteger);



function counter(n) {
  return {
    get count() {
      return n++
    },
    set count(m) {
      if (m >= n) {
        n = m
      } else {
        throw Error("count can only be set to a larger value")
      }
    }
  }
}

var c = counter(1000);
console.log(c.count);
console.log(c.count);
c.count = 2000;
console.log(c.count);
// console.log(c.count = 2000);


function addPrivateProperty(o, name, predicate) {
  var value;

  //getter
  o["get" + name] = function () { return value }

  //setter
  o["set" + name] = function (v) {
    if (predicate && !predicate(v)) {
      throw Error("set" + name + ": invalid value " + v)
    } else {
      value = v
    }
  }
}

var o = {};
addPrivateProperty(o, "Name", function (x) { return typeof x == "string" })
o.setName("Frank")
console.log(o.getName());
o.setName(O);
console.log(o.getName());



