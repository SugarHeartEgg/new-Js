// 对象的遍历

let o = { one: 1, two: 2, three: 3 }

// for in 
for (let p in o) console.log(p); // 'one' 'two' 'three'

// for each   E4x专属
// foreach(let p in o) console.log(p); // '1' '2' '3' 



// 数组的遍历

let arr = ['one', 'two', 'three'];

for (const p in arr) {
  console.log(p); // '0' '1' '2'
}

// for each   E4x专属
// foreach(let p in o) console.log(p); // 'one' 'two' 'three'

