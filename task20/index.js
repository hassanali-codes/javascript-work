// -----------------TASK 20---------------------------
// Mini Project
// class book {
//     constructor(title, author, year) {
//         this.title = title
//         this.author = author
//         this.year = year
//     }
// }

// class library {
//     constructor() {
//         this.books = []
//     }
//     addBook(book) {
//         this.books.push(book)
//     }
//     removeBook(title) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (this.books[i].title === title) {
//                 this.books.splice(i, 1)
//                 break
//             }
//         }
//     }
//     showBooks() {
//         this.books.forEach(book => {
//             console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
//         });
//     }
// }

// const book1 = new book("Harry Potter", "J.K. Rowling", 1997);
// const book2 = new book("wild life", "science", 1937);

// const myLibrary = new library();
// myLibrary.addBook(book1);
// myLibrary.addBook(book2);
// myLibrary.showBooks();
// myLibrary.removeBook("wild life");
// console.log("Books in the library after removing wild life':");
// myLibrary.showBooks();

// -------------------------Practice--------------------------------
// This keyword in javascript: reference to the object where this is used
// const person1 = {
//     name: "Hassan Ali",
//     favSport: "football",
//     sayHello: function(){console.log(`Hi I am ${this.name}`)},
//     play: function(){console.log(`I am playing ${this.favSport}`)}
// }

// const person2 = {
//     name: "Haider Ali",
//     favSport: "cricket",
//     sayHello: function(){console.log(`Hi I am ${this.name}`)},
//     play: function(){console.log(`${this.name} is playing ${this.favSport}`)}
// }


// person2.sayHello()
// person2.play()



// // static keyword in js:


// class User {
//     static userCount = 0

//     constructor(username){
//         this.username = username;
//         User.userCount ++
//     }
//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`)
//     }
//     sayHello(){
//         console.log(`Hello my username is ${this.username}`)
//     }
// }

// const user1 = new User("Hassan")
// const user2= new User("Haider")
// const user3 = new User("Adnan")



// user1.sayHello()
// user2.sayHello()
// user3.sayHello()
// User.getUserCount()

// class MathHelper {
//   static add(a, b) {
//     return a + b;
//   }

//   static multiply(a, b) {
//     return a * b;
//   }
// }

// console.log(MathHelper.add(2, 3));      // 5
// console.log(MathHelper.multiply(4, 5)); // 20

// // ❌ You cannot call on an object
// const m = new MathHelper();
// // m.add(2,3);  // Error!


// getters and setters in javascript:
// getters: are special methods that makes a property readable
// setters: special method that makes a property writable



// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth
//         }
//         else{
//             console.error("width must be a positive number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height= newHeight
//         }
//         else{
//             console.error("Height must be a positive number")
//         }
//     }

//     get width(){
//         return this._width
//     }
//     get height(){
//         return this._height
//     }
// }

// const rectangle = new Rectangle(10, 5)

// rectangle.width = 5;
// rectangle.height = 8

// console.log(rectangle.width)
// console.log(rectangle.height)


// class Person{
//     constructor(firstName, lastName, age){
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error("first name must be a non-empty string")
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error("last name must be a non-empty string")
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge >=0){
//             this._age = newAge
//         }
//         else{
//             console.error("age must be a non negative number")
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }

//     get lastName(){
//         return this._lastName;
//     }

//     get fullName(){
//         return this._firstName + " " + this._lastName
//     }

//     get age(){
//         return this._age;
//     }
// }

// const person = new Person("hassan", "ali", 20)

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.fullName)
// console.log(person.age)


// Inheritance:
class Animal{
    isAlive = true

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = 'rabbit'

    run(){
        console.log(`this ${this.name} is running`)
    }
}
class Fish extends Animal{
    name = 'fish'

    swim(){
        console.log(`this ${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name= 'hawk'

    fly(){
        console.log(`This ${this.name} is flying`)
    }
}


const rabbit = new Rabbit();
const fish = new Fish()
const hawk = new Hawk();

console.log(rabbit.isAlive)
hawk.eat()
hawk.sleep()