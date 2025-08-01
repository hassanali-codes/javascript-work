// -----------Task Questions-----------------
// 1. Write a function that takes two numbers as parameters and returns their sum

// function add(x, y){
//     return x + y;
// }
// let sum = add(4, 5);
// console.log(sum);   

// ........................pseudo code..........................
// Define a function called "add" that takes two inputs: x and y
                // inside the function
                // return the result of x and y
// call the function and pass two numbers as arguments and store result in a variable like sum
// then print the sum using console.log()



// 2. Write a function that takes an array of numbers and returns the maximum number.


// let arr = [1,2,3,4,5,6,]
// function max(arr){
//     let largest = arr[0];
//     for(let i=1; i< arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(max(arr))

// ....................pseudo code..........................
// Define a function called "max" that takes an array of numbers as input
                // inside the function
                // initialize a variable called "largest" that store first element  of the array
                // loop through the array starting from the second element
                // check if the current element is greater than the "largest" variable
// outside the function 
                // call the "max" function and pass the array as an argument and print it





//    3. Write a function that returns the sum of even numbers in an array. (Bonus Question)
// let array = [1,2,3,7,6,8,5,10]

// function sumEven(array){
//     let sum = 0;
//     for(let i=0; i< array.length; i++){
//         if(array[i] % 2 === 0){
//             sum += array[i];
//         }
//     }
//     return sum;
// }
// console.log(sumEven(array));


// ..............pseudo code................
// Define a function called "sumEven" that takes an array of numbers as input
                // inside the function
                // initialize a variable called "sum" that store 0
                // loop through the array starting from the first element
                // check if the current element is even
                //if it is even store it in the varable sum.
// outside the function 
                // call the "sumEven" function and pass the array as an argument and print it





// --------------FUNCTION------------------
// ------------------PRACTICE--------------------
// function = A section of reusable code. Declare code once, use it whenever you want. call the function to execute that cod

// function happyBirthday(name, age){
//     console.log(`happy birthday ${name} `);
//     console.log(`You are ${age} years old`);
//     console.log("\n");

// }

// happyBirthday("hassan ali", 20);
// happyBirthday("haider", 20)
// happyBirthday("ali", 23)

// ------Calculator program using functions------
// function add(x, y){
//     return x + y ;
// }
// function subtract(x, y){
//     return x + y;
// }
// function multiply(x, y){
//     return x * y;
// }
// function divide(x, y){
//     return x / y;
// } 
// function exponent(x, y){
//     return x ** y;
// }

// x = Number(prompt("Enter first number: "));
// y = Number(prompt("Enter second number: "));
// operator = prompt("Enter operator (+,-,*,/,^): ");

// if(operator == "+"){
//     console.log(add(x, y));
// }
// else if(operator == "-"){
//     console.log(subtract(x, y));
// }
// else if(operator == "*"){
//     console.log(multiply(x, y));
// }
// else if(operator == "/"){
//     console.log(divide(x, y));
// }
// else if(operator == "^"){
//     console.log(exponent(x, y));
// }

// function isEven(num){
//     // return num % 2 === 0 ? "even" : "odd";  // ternary operator
//     if(num % 2 == 0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// console.log(isEven(10));

// function isValid(email){
//     // if (email.includes("@")){
//     //     return "email is valid";
//     // }
//     // else{
//     //     return "email is not valid";
//     // }
//     return email.includes("@") ? "email is valid" : "email is not valid";
// }
// console.log(isValid("hassanali@gmail.com"));


// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// let names = ["Ali", "Hassan", "Haider"];

// for (let i = 0; i < names.length; i++) {
//   greet(names[i]); 
// }


























