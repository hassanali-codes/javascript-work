// ----------Task 22--------------
// Inheritance with Prototype
function Animal(name){
    this.name = name
}

Animal.prototype.speak = function(){
    console.log(this.name + " makes a sound")
}

function Dog(name){
    Animal.call(this, name) // inherits properties
}
Dog.prototype = Object.create(Animal.prototype)   // inherit methods
Dog.prototype = Dog


Dog.prototype.speak = function(){
    console.log(this.name, "Barks")
}

const dog = new Dog("Buddy")
const animal = new Animal("Huskey")
animal.speak()
dog.speak()







