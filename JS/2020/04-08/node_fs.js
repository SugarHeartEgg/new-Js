const fs = require("fs"), path = require("path");

var dir = process.cwd(); // 当前目录地址

if (process.argv.length > 2) { dir = process.argv[2]; }

var files = fs.readdirSync(dir);

// process.stdout.write("Name\tsize\tDate\n");

files.forEach(filename => {
  var fullName = path.join(dir, filename);
  var stats = fs.statSync(fullName);
  if (stats.isDirectory()) filename += "/";
  process.stdout.write(`${filename}${"\t"}${stats.size}${"\t"}${stats.mtime}${"\n"}`)
})