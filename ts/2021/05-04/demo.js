// 类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    console.log(person);
    return "Hello , " + person.fullName;
}
var user = new Student("Lian", "M.", "YiHeng");
console.log(user);
document.body.innerHTML = greeter(user);
