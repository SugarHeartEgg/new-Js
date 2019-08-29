function fn() {
  // return this
}
console.log(fn());



// 集合

function Set() {
  this.values = {}
  this.n = 0;
  this.add.apply(this, arguments)
}

Set.prototype.add = function () {
  for (var i = 0; i < arguments.length; i++) {
    var val = arguments[i];
    var str = Set._v2s(val);
    if (!this.values.hasOwnProperty(str)) {
      this.values[str] = val
      this.n++
    }
  }
  return this
}



var time = new Date()
console.log(time);
var d = time.toJSON();  // 转换为字符串    序列化  :  把变量从内存中  变成可以存储 修改 传输 的过程称之为  序列化
console.log(d);

// console.log(time.toJSON());
// console.log(time.toSringify());



var obj = { name: "John", age: 30, city: "New York" };
var MySql = JSON.stringify(obj);
console.dir(MySql);




