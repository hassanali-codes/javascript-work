// ----------Task 22--------------
const obj = {};
console.log(obj)
console.log(obj.toString); // function toString() { [native code] } 

//-------Function Prototype-------
function Person(name){
    this.name = name

    Person.prototype.sayHello = function (){
        console.log(`Hello ${this.name}`)
    }
}

const p1 = new Person("Hasssan")
const p2 = new Person("Ali")

p1.sayHello()
p2.sayHello()













