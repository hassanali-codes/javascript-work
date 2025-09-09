// --------------Task 21-----------------

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `Hi I'm ${this.name} and I'm ${this.age} years old.`
        }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }

    // Ovverride
    introduce() {
        return `${super.introduce()} I study in grade ${this.grade}.`
    }
}

const student2 = new Student("Haider", 19, "9th")
const student1 = new Student("Hassan", 20, "10th")
const student3 = new Student("Adnan", 24, "11th")
const student4 = new Student("Ali", 22, "12th")

console.log(student1.introduce())
console.log(student2.introduce())
console.log(student3.introduce())
console.log(student4.introduce())































