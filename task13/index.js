// --------------TASK 13---------------
// const add = (a,b) => {
//     return a + b
// }

// console.log(add(5, 6))

// 0 parameters
const sayHi = () => console.log("Hi");

// 1 parameter (parens can be skipped, but many devs keep them)
const square = n => n * n;
// or
const square2 = (n) => n * n;

// Multiple parameters (must use parens)
const add = (a, b) => a + b;

// Multi-line body (use { } and return)
const sum = (a, b) => {
  const result = a + b;
  return result; // must write return when using { }
};

// Returning an object literal? Wrap it in ( )
// otherwise JS thinks { } is a function body
const makeUser = (name) => ({ name, active: true });

console.log(makeUser("Hassan ali")) 


const bad = () => { foo: 1 };      // ❌ This is a block, not an object
const good = () => ({ foo: 1 });   // ✅ Object is returned

const double = x => x * 2;          // implicit return (no { })
const double2 = (x) => { return x * 2; }; // explicit return (with { })

double2(5)
console.log(double(5))      

function show() {
  console.log(this);
}

show(); // In browser → "window" (the global object)


const person = {
  name: "Ali",
  friends: ["Ahmed", "Sara"],
  showFriends: function() {
    this.friends.forEach(friend => {
      console.log(this.name + " knows " + friend);
    });
  }
};

person.showFriends();
// Ali knows Ahmed
// Ali knows Sara


const counter = {
  value: 0,
  // ❌ using arrow here: `this` won’t be the object
  incBad: () => { this.value++; },

  // ✅ use a regular function so `this` is the object
  incGood() { this.value++; }
};

console.log(counter)


// --------- Practice: Convert to arrow function-----------------
const square3 = x => {
  return Math.pow(x, 2)     
}
console.log(square3(5))


// Write an arrow function to check if a number is prime.

const primes = x => {
  if(x < 2){
    return "notPrime"
  }
  for(let i = 2; i <= Math.sqrt(x); i++){
    if(x % i === 0){
      return "notPrime"
    }
  }
  return "prime"
}

console.log(primes(15))



// TEMPLATE LITERALS
// let name = "Hassan ali"
// let age = 20
// let isStudent = true
// console.log(`my name is ${name}
//             I am ${age} years old
//             are you a student?: ${isStudent}`)


// // Create a function that takes name & age and returns:
// const func = (name, age) => {
//   return `My name is ${name} and i am ${age} years old`
// }

// console.log(func("hassan ali", 20))


// Destructing
// let arr = [1,2,3]
// let [a,b,c] = arr

// console.log(a)
// console.log(b)
// console.log(c)


// let person1 = { name1: "Ali", age1: 20, city1: "Karachi" };
// let { name1, age1, city1 } = person1;

// console.log(name1); // Ali
// console.log(age1);  // 20
// console.log(city1); // Karachi


// let [x, y= 2] = [5]
// console.log(Math.pow(x, y))
// console.log(y)  


// let arr1 = {name: "Ali", age: 20, city: "Karachi"}
// let {name, age, city} = arr1

// console.log(name)
// console.log(age)
// console.log(city)

// // Swap two variables using array destructuring.
// let  num1 = 5;
// let num2 = 10;

// [num1, num2] = [num2, num1]

// console.log(num1, num2)


// Spread & Rest Operators
// const d = [1,2,3]
// const e = [4, 5]

// const copy = [...d]
// console.log(copy)

// const merged = [...d, ...e]
// console.log(merged)

// const middle = [0, ...d, ...e, 100]
// console.log(middle)

// const nums = [3, 8, 1]
// console.log(Math.max(...nums))
// console.log(Math.min(...nums))

// console.log([...`Ali`]) // string: arra of characters

// In Objects
// const nameId = {id: 1, name: 'Hassan', city: "lahore"}
// const extra = {city: "Karachi", name: "Ali"}

// const copyObj = {...nameId}

// console.log(copyObj)

// // merge (later keys overwrite earlier ones)
// const mergeObj = {...nameId, ...extra}
// console.log(mergeObj)


//REST OPERATORS:
// allow a function work with a variable number of arguments by bundling them into an array

function fruits(...fruit){
  console.log(fruit)
  console.log(...fruit)  //also use spread to seperate each elements
}

const fruit1 = "mango"
const fruit2 = "apple"
const fruit3 = "peach"


fruits(fruit1, fruit2, fruit3) 


function getFood(...foods){
  return foods
}

const foods = getFood(fruit1, fruit2, fruit3)
console.log(foods)


// Merge two arrays using spread
let arr1 = [1,2,3,4,5]
let arr2 = [5,6,7,8,9]

let merged = [...arr1, ...arr2]
console.log(...merged)




// Create a function using rest that sums unlimited numbers
function Sum(...numbers){

  let result = 0;
  for(let number of numbers){
    result += number;
  }
  return result;

}

const total = Sum(1,2,3,4,5,6,7,8,9,10)
console.log(`your total is $${total}`) 


// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10




// --------------Leet Code Style Problem--------------
// Problem: Write a function twoSum(nums, target) that returns the indices of the two numbers that add up to target.

function twoSums(nums, target){
  for(let i=0; i < nums.length; i++){
    for(let j=0; j<nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
}

console.log(twoSums([1,2,3,4,5,6], 3))

















