// task 15
//  Task: Create one function declaration and one function expression,
// and test calling them before they’re defined.

declarationFunc(); 
// expressionFunc(); 
function declarationFunc() {
    console.log("This is a function declaration.");
}

// const expressionFunc = function() {
//     console.log("This is a function expression.");
// };

// Practice Problems:1.	Write a program to check if a variable inside a loop is accessible outside the loop 
// when declared with var, let, and const.

for (var i = 0; i < 3; i++) {
    console.log("Inside loop with var:", i);
}
console.log("Outside loop with var:", i); 

for (let j = 0; j < 3; j++) {}
console.log("Outside loop with let:", j); // ReferenceError. J is not defined

for (const k = 0; k < 3; k++) {}
console.log("Outside loop with const:", k); // ReferenceError. K is not defined

































