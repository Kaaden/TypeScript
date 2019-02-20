// 类
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + "" + middleInitial + "" + lastName
    }
}
// 接口
interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
}


// TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式
function greeter(person: Person) {
    console.log(person)
    return "Hello, " + person.firstName + "" + person.lastName + "" + person.fullName;
}

// let user = { firstName: "Kaaden", lastName: "USER" };
let user = new Student("Kaaden", "M.", "User");
document.body.innerHTML = greeter(user);