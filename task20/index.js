// -----------------TASK 20---------------------------
// Class declaration vs expression
// class declaration
class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

const p1 = new Person("Hassan ali")

p1.greet()

// Named class expression
const car = class CarClass{
    constructor(brand){
        this.brand = brand
    }
}

// Anonymous class expression (no class name inside)
const bike = class {
    constructor(model){
        this.model = model
    }
}

const c1 = new car("Toyota")
const c2 = new bike("yamaha")

console.log(c1.brand)
console.log(c2.model)
