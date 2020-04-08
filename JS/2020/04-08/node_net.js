
/**
 * "net" 模块用于基于TCP网络的API
*/
var net = require("net");
var server = net.createServer();
server.listen(2000, function () {
  console.log("监听2000端口");
});
server.on("connection", function (stream) {
  console.log("Accepting connection from", stream.remoteAddress);
  stream.on("data", function (data) {
    stream.write(data);
  })
  stream.on("end", function (data) {
    console.log("Connection closed");
  })
})
