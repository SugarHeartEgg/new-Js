// 字符串
let myName: string = 'lian yi heng'
// 数字
let myAge: number = 25
// 布尔
let isAge: boolean = false
// 数组 (数组中只能是单一类型)
let myList: string[] = ["1", "2"]
// 数组 泛型申明 (数组中只能是单一类型)
let myGenericList: Array<number> = [1, 2, 3]

// 元组 (数组中允许混杂类型) , 元组类型允许表示一个已知元素数量和类型的数组.
let x: [string, number]

// 联合类型
// let x: [string | number | boolean]


x = ['hello', 1] // 位置是一一对应的
console.log(x[0].substr(0));

/**
 * 使用了不存在,初始定义类型中原型上的方法就会提示报错.
*/
// console.log(x[1].substr(1));

/**
 * 这样添加 ts会报错,在编译是也是会报错.
 * 但是转为js文件时也可以正常访问到的,这种方式不推荐.
*/
// x[3] = "word"; 
console.log(x);

// 枚举
// enum类型是对JavaScript标准数据类型的一个补充

// 默认情况下，从0开始为元素编号.
// enum Color { Red, Green, Blue }

// 也可以手动的指定成员的数值,改成从1开始编号.
// enum Color { Red = 1, Green, Blue }

// 或是全部手动,进行指定更改.
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green
let colorListName: string = Color[2]
console.log(c);
console.log(colorListName);

// Any
let notSure: any = 4;
console.log(notSure.toFixed());

/**
 *  Object类型的变量只是允许你给它赋任意值,
 *  但是却不能够在它上面调用任意的方法,即便它真的有这些方法
 */
let prettySure: Object = 4;
// 类型“Object”上不存在属性“toFixed”
// console.log(prettySure.toFixed());

// Void

// 当一个函数没有返回值时,其返回值类型是 void
function warnUser() {
  console.log("this is my warning message");
}

// 当一个函数有返回值时,其返回值类型是 返回结果的类型
function warnUsers() {
  console.log("this is my warning message");
  return 123
}

// 指定返回结果的类型
function warnUserss(): string {
  console.log("this is my warning message");
  return "123"
}

console.log(warnUser());
console.log(warnUsers());
console.log(warnUserss());

// 声明一个void类型的变量没有什么大用,因为只能为它赋予undefined和null 
let unusable: void = null
let unusables: void = undefined

// let unusable: void = 基础类型(number,string,boolean,Array) // 不能将基础类型分配给类型“void”


// Never
// never类型表示的是那些永不存在的值的类型


// 类型断言
// 自己本身非常清楚使用的类型是什么,不用编译器帮忙进行类型检查

// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is my son"
let strLength: number = (<string>someValue).length;

// 其二是 as 语法：
let strLengths: number = (someValue as string).length;

/**
 * 两种形式是等价的.至于使用哪个大多数情况下是凭个人喜好.
 * 然而
 * 当你在TypeScript里使用JSX时,只有 as 语法断言是被允许的
*/

console.log(strLength);
console.log(strLengths);





