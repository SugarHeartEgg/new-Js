var strict = (function strict() {

  return !this
}())
console.log(strict);

var cat = {
  oped1: 1,
  oped2: 1,
  add: function () {
    this.result = this.oped1 + this.oped2
  }
}
cat.add()
console.log(
  cat.result
);
