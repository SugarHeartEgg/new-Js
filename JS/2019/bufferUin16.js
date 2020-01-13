const arr = new Uint16Array(2)
console.log(arr);
arr[0] = 4000
arr[1] = 5000
console.log(arr);

// 拷贝arr的内容
const buf1 = Buffer.from(arr)
console.log(arr.buffer);
console.log(buf1.toString('utf16le'));

const buf2 = Buffer.from(arr.buffer)
console.log(buf2);


var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(bin);
var sub = bin.slice(2);
console.log(sub);
sub[0] = 0x66
console.log(bin);




