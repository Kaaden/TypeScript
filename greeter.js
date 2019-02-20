// 类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
    return Student;
}());
// TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式
function greeter(person) {
    console.log(person);
    return "Hello, " + person.firstName + "" + person.lastName + "" + person.fullName;
}
// let user = { firstName: "Kaaden", lastName: "USER" };
var user = new Student("Kaaden", "M.", "User");
document.body.innerHTML = greeter(user);
