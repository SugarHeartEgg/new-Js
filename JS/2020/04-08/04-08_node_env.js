// javaScript 服务器端


// rhino 是java编写的javaScript解释器，其设计就是为了借助Java平台强大的API现实并编写JavaScript。


/**
 * node  是google V8 javaScript 解析器的一个特别版 
 * 它在底层绑定了POSIX(Unix) API，包括文件，进程
 * 流，套接字等。 并侧重于异步I/O，网络和HTTP。
*/

var fs = require("fs")
// console.log(fs);


// setTimeout(() => {
//   console.log("我是计时器");
// }, 1000)

console.log("node版本", process.version);
console.log("node 命令行的数组参数", process.arhv);
console.log("环境变量对象", process.env);
console.log("进程id", process.pid);
// console.log("返回用户id", process.getuid());
console.log("返回当前的工作目录", process.cwd());
// console.log("改变目录", process.chdir());
console.log("退出", process.exit());
