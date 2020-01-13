var a = [function (x) { return x * x }, 20]
console.log(a[0](a[1]))

// 这种是数组直接量

uniqeInteger.couter = 0
function uniqeInteger() { return uniqeInteger.couter++ }
console.log(uniqeInteger());
console.log(uniqeInteger());
console.log(uniqeInteger());

