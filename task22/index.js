// ----------Task 22--------------
const obj = {};
console.log(obj)
console.log(obj.toString); 


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


// Inheritance with Prototype
function Animal(name) {
    this.name = name; 
}

Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound");
};

function Dog(name) {
    Animal.call(this, name); 
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; 

Dog.prototype.speak = function() {
    console.log(this.name + " barks");
};

const dog = new Dog("Buddy");
const animal = new Animal("Huskey");

animal.speak(); 
dog.speak();   



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
const animal1 = new Animal("rabbit")

dog1.speak()



// Practice Task(prototype)
function Shape(width, height){
    this.width = width
    this.height = height
}

Shape.prototype.Area = function(){
    console.log("Area")
}

function Rectangle(width, height){
    Shape.call(this, width, height)
}
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.Area = function () {
    console.log(this.width * this.height)     
}
const r1 = new Rectangle(20, 6)
r1.Area()



// ---------LeetCode Problem 1--------
// Reverse Integer
// 12345 ---> 54321

function reversedNumber(num){
    if(num >= 0 && num <=9){
        return num 
    }
    let reversedNum = 0
    while(num!= 0){
        reversedNum = reversedNum * 10 + (num% 10) 
        num = Math.floor(num/10)
    }
    return reversedNum
}
console.log(reversedNumber(1234))




// ---------LeetCode Problem 2--------
// Remove duplicate from sorted ARRAY

let arr = [1,1,2,2,3,3,4,4]
let newarr = []
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] !== arr[i + 1]){
        newarr.push(arr[i])
    } 
}
console.log(newarr)  
