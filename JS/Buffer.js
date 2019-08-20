const buf1 = Buffer.alloc(10)
console.log(buf1);

const buf2 = Buffer.alloc(10, 1)
console.log(buf2);

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

const buf5 = Buffer.from('tést');
console.log(buf5);

var buf6 = new Buffer([0x74, 0xc3, 0xa9, 0x73, 0x74])
console.log(buf6.toString('utf-8'));


const buf7 = Buffer.from('tést', 'latin1')
console.log(buf7);
var buf8 = new Buffer([0x74, 0xe9, 0x73, 0x74])







