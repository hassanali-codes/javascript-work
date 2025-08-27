// task 15
// -------------Hoisting in javaScript-------------

// console.log(b)
console.log(a)
greet()
function greet() {
    console.log("Hello World")
}

`Note: javascript only hoists declarations, not initializations. The variable will be undefined untuil the line
where it is initialized is reached.`
var a = 9;
console.log(a) 

let b = 8; 
console.log(b)

`with var, if we try to access the variable before initialization, it will give undefined`
console.log(x)
var x = 7;

`with let and const, if we try to access the variable before initialization, it will give reference error`
console.log(y)
let y = 6;

`function declaration is fully hoisted--. you can call them before defining them`
sayHello()
const sayHello = function() {
    console.log("Hello")
}

`with function expression, if we try to access the variable before initialization, it will give reference error
only the var sayHi is hoisted, not the function body`
sayHi()
var sayHi = function() {
    console.log("Hi")
}
