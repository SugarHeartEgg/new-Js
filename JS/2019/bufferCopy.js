var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var dup = new Buffer(bin.length);
bin.copy(dup);
console.log(bin);
console.log(dup);
dup[0] = 0x88
console.log(dup);

