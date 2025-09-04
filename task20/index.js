// -----------------TASK 20---------------------------
// Task 3
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); 
    this.grade = grade;
  }

  showInfo() {
    console.log("Student Name: " + this.name + ", Age: " + this._age + ", Grade: " + this.grade);
  }

// Task 4
  static compare(s1, s2) {
    if (s1.grade > s2.grade) {
      return s1;
    } else {
      return s2;
    }
  }
}

let s1 = new Student("Hassan", 20, 85);
let s2 = new Student("Ahmed", 21, 90);

s1.showInfo();
s2.showInfo();

let topper = Student.compare(s1, s2);
console.log("Topper is:", topper.name);