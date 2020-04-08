/**
 * 创建一个256字节的新缓冲区
 */
var bytes = new Buffer(256);


/**
 * 通过索引值进行遍历
*/
for (var i = 0; i < bytes.length; i++) {
  // 设置缓冲区的每个元素
  bytes[i] = i

  // 为这个缓冲区创建一个新的试图
  var end = bytes.slice(240, 256);

  // 240: end[0] 就是 bytes[240] 
  end[0]

  // 修改这个切片
  end[0] = 0;

  // 原始缓冲区也修改了
  bytes[240]

  // 创建一个新的独立缓冲区
  var more = new Buffer(8);

  // 把end[]的第8~15元素复制到more[]中
  end.copy(more, 0, 8, 16);

  // 248
  more[0]
}