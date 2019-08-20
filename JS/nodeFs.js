// var fs = require('fs')

// function copy(src, dst) {
//   fs.writeFileSync(dst, fs.readFileSync(src))
// }

// function main(argv) {
//   copy(argv[0], argv[1])
// }

// main(process.argv.slice(2))


var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f])
// var bin = new Buffer('hello', 'utf-8')
// var str = bin.toString('utf-8')
// console.log(str);
// console.log(bin);
// console.log(bin[0]);
var sub = bin.slice(2)
console.log(sub);
console.log(sub[0]);





