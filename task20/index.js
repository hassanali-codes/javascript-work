// -----------------TASK 20---------------------------
// Constructor Methods: constructor() is a special method inside a class.It runs automatically when you create a new object.
// Used to initialize properties (give them starting values).

class Student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }
    showGrade(){
        console.log(`NAME : ${this.name}`)
        console.log(`GRADE : ${this.grade}`)
    }
}
const st1 = new Student("Hassan Ali", "A+")

st1.showGrade()