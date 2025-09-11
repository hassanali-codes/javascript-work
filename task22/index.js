// ----------Task 22--------------
// ES6 Classes with prototype
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(this.name, "makes a sound")
    }
}

class Dog extends Animal {
    constructor(name){
        super(name)
    }
    speak(){
        console.log(this.name,"barks")
    }
}

const dog1 = new Dog("german shephard")
const animal = new Animal("rabbit")
animal.speak()
dog1.speak()
