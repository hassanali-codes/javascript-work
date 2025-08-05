// -----------------leet code question--------------
// Input: A string, e.g. 
// "javascript" Goal: Count how many times each character appears.


// function countCharacters(str){
//     const counter = {}
//     for(let char of str){
//         if(counter[char]){
//             counter[char] += 1;
//         }
//         else{
//             counter[char] = 1;
//         }
//     }
//     return counter;
//     }
// const result = countCharacters("javascript with hassan ali");
// console.log(result);


//-------------PRACTICE---------------
// OBJECTS IN JAVASCRIPT= A collection of related properties and/or methods. can represent real world objects (people, products, places)
//                        objects = {key:value,
//                                   function()}

const person1 = {
    fisrtName: "Hassan",
    lastName: "Ali",
    age: 20,
    isEmployed: false,
    sayHello: function(){console.log("Hi! my name is  Hassan ali")},
    eat: function(){console.log("I am eating burger")}
}

const person2 = {
    firstName: "Haider",
    lastName: "Ali",
    age: 19,
    isEmployed: true,
    sayHello: function(){console.log("Hi! my name is Haider Ali")},
    eat: function(){console.log("I am eating pizza sandwich")}
}

person1.city = "karachi" // add property

//update
person1.age = 31;
person2['isEmployed'] = false

delete person1.city;


//access
console.log(person1.fisrtName) 
console.log(person1.lastName)
console.log(person1.city)
console.log(person1.age)
console.log(person1[`age`])  
console.log(person1.isEmployed)
person1.sayHello()
person1.eat()

console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2['age'])
console.log(person2.isEmployed)
person2.sayHello()
person2.eat()  



const car = {
  brand: "Honda",
  model: "Civic",
  year: 2020,
  color: "Red"
};

// for...in loop
for (let prop in car) {
  console.log(`${prop}: ${car[prop]}`);
}

// Object.keys loop
Object.keys(car).forEach(key => {
  console.log(`${key}: ${car[key]}`);
});
