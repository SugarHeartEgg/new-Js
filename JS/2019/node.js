var node = function () {
  return '我是Node'
}

var i = 0;
function count() {
  return ++i
}
exports.node = node
exports.count = count
