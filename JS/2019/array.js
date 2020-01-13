var arr = [1, 2, 3, 4, 5]
arr.reverse() // 颠倒
console.log(arr);
arr.sort()    // 排序
console.log(arr);


var arr2 = ['ant', 'Bug', 'cat', 'Dog']
arr2.sort((s, t) => {
  var a = s.toLowerCase();
  var b = t.toLowerCase();
  if (a < b) return -1
  if (a > b) return 1
  return 0
})


var arr3 = arr.concat(arr2)
console.log(arr3);


var arr4 = arr3.slice(1, -2)
console.log(arr4);



var arr5 = []
arr5.push(1, 2)
console.log(arr5);
arr5.pop()
console.log(arr5);
arr5.push(3)
console.log(arr5);



var arr6 = [1, 2, 3, 4, 5, 6]
var flag = arr6.every(v => {
  // return v < 10
  return v % 2 === 0
})
console.log(flag);



var arr7 = [1, 2, 3, 4, 5]
var sum = arr7.reduce((x, y) => {
  // console.log(x);
  // console.log(y);
  return x + y
}, 0)


// var objects = [{ a: 1 }, { y: 2 }, { z: 3 }]
// var merged = objects.reduce(union)
// console.log(merged);

// var objects = [
//   { x: 1, a: 1 },
//   { y: 2, a: 2 },
//   { z: 3, a: 3 }
// ]

// var leftunion = objects.reduce(union)
// console.log(leftunion);


var arr8 = [0, 1, 2, 1, 0]
console.log(
  // arr8.indexOf(1)
  arr8.lastIndexOf(1)
);


var arr9 = []
// console.log(arr9.isArray([]));


var s = "JavaScript"
var ss = Array.prototype.join.call(s, " ")
console.log(ss);





