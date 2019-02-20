class Person {
    name: String;
    age: number;
    constructor(name: String, age: number) {
        this.name = name;
        this.age = age
    }
    say() {
        return `hello ,my name is ${this.name} ,age is ${this.age}`
    }
}
//继承person
class Student extends Person{
    school: String;
    constructor(){
        super("zhy", 23);
        this.school = "清华"
    }
    say(){
        return `${this.name}+${this.age}+${this.school}`
    }
}
var s = new Student();
document.body.innerHTML = s.say();