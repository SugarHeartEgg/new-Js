// 接口 定义参数初始类型
interface Person {
  firstName: string,
  lastName: string,
  fullName: string
}

// 类
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: any,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

function greeter(person: Person) {
  console.log(person);
  return "Hello , " + person.fullName
}


let user = new Student("Lian", "M.", "YiHeng")

console.log(user);

document.body.innerHTML = greeter(user);



