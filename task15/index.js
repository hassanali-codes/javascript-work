// Practice Problem 2
//2.	Write a function that uses both global and local variables to calculate the sum 

let a = 10; 
function LocalglobalSum(b) { 
    return a + b; 

}
console.log(LocalglobalSum(5)); 


// Practice Problem 3
// 	Write code that demonstrates hoisting with functions and variables, then explain the output line by line.

console.log(alpha)
var alpha = "Hello World"
console.log(alpha)

console.log(beta)
let beta = "Hello"
console.log(beta)

greet();   // "Hello!"  (function declaration hoisted)

function greet() {
    console.log("Hi there!");
}

sayBye();  // TypeError: sayBye is not a function (if sayBye declared with var later)

var sayBye = function() {
    console.log("Bye!");
}


























