// -----------------TASK 20---------------------------
// Task 2
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;   
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }

  showInfo() {
    console.log("Name: " + this.name + ", Age: " + this._age);
  }
}

let p1 = new Person("Ali", 30);
p1.showInfo();              
console.log("Age:", p1.age); // getter
p1.age = 31;                // setter
console.log("Updated Age:", p1.age);