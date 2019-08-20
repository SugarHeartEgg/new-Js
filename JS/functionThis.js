let o = {
  m: function () {
    var self = this;
    console.log(this === o);
    f()

    function f() {
      // 此时的this的作用域已经改变了  指向f()
      console.log(this === o);

      // 而之前保存的this是ok的
      console.log(self === o);
    }
  }
}
o.m()


let oq = new Object()
let oa = new Object

console.log(oq)
console.log(oa.toString())