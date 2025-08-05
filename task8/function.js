// ------------------Task quesions------------------------------------
// function greetUser(name){
//     console.log(`HELLO ${name}`)
// }
// greetUser("Hassan ali")

// const greetUser = ((name) => console.log(`Hello ${name}`) )
// greetUser("Hassan ali")

// -----sum(a, b)------
// function add(a, b){
//     return a + b;
// }
// console.log(add(1, 2))

// const add = ((a, b) => a + b)
// console.log(add(1, 5))

//------
// const even = ((n) => n%2 === 0)
// console.log(even(3))


// --------
// arr = [1,2,3,4,5]

// function getFirstElement(array){
//     console.log(arr[0])
// }
// getFirstElement(arr)

// const getFirstElement = ((array) => console.log(arr[0]))
// getFirstElement()


// get full name
// function getFullname(first, last){
//     return first + " " + last;
// }
// console.log(getFullname("hassan", "ali"))


// to find max of two numbers
// function max(a, b){
//     if(a > b){
//         console.log(b)
//     }
//     else{
//         console.log(b)
//     }
// }
// max(5, 6)

// factorial 


// function factorial(n){
//     if(n === 0){
//         console.log("number")
//     }
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result = result * i

//     }
//     return result;

// }
// console.log(factorial(5))

// -----------Create a function that reverses a string-----------

// function reverse(name){
//     return name.split("").reverse().join();
// }
// console.log(reverse("hassan ali"))


//-----------------Leet code problem----------------
// arr = [1,2,3,,5,6, 7]

// function max(arr){
//     largest = arr[0];
//     secondLargest = 0;
//     for(let i =0; i < arr.length + 1; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     for(let i=0; i<arr.length + 1; i++){
//         if(arr[i] < largest && arr[i] > secondLargest){
//             secondLargest = arr[i]
//         }
//     }
//     return secondLargest;
// }
// console.log(max(arr))



// ---------------PRACTICE-------------------------
// ------- FUNCTIONS-----------------:
// function evenOddchecker(num){
//     for(let i = 2 ; i < num+1; i++){
//         if(i%2 == 0){
//             console.log(`${i} is even number`)
//         }
//         else{
//             console.log(`${i} is odd number`)
//         }
//     }
// }
// evenOddchecker(100)

// let arr = [1,2,3,4,5,6,7,78,98,90]
// function maxVal(arr){
//     let largest = arr[0];
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }return largest;
// }
// console.log(maxVal(arr));

// -----------------function expression = a way to define function as value or variable-----------------------

// const hello = function(){      // function as a variable
//     console.log("Hello");
// }
// hello();

// setTimeout(function(){       // function as a value
//     console.log("Hello");
// }, 3000)  

// const num = [1,2,3,4,5,6];
// const squares = num.map(square);

// console.log(square)

// function square(elements){
//     return Math.pow(elements, 2);
// }

// function expression
// const num = [1,2,3,4,5,6]
// const squares = num.map(function(elements){
//     return Math.pow(elements, 2)
// })
// console.log(squares)

// const num = [1,2,3,4,5,6,7,8]
// const squares = num.map(function(elements){
//     return elements % 2 === 0 ? "Even" : "Odd"   
// })
// console.log(squares)


// const numbers = [1,2,3,4,5,6,7,8]
// const cube = numbers.map(function(n){
//     return Math.pow(n, 3)
// })
// console.log(cube)

// const evenNums = numbers.filter(function(element){
//     return element %2 === 0;
// })
// console.log(evenNums) 

// const total = numbers.reduce(function(accumulator, elements){
//     return accumulator + elements;
// })
// console.log(total)

// ----------Arrow function in javascript: ------------------
// a concise way to write function expression good for simple expressions that use only once
//    (parameters)  => some code
// const hello = (name, age) => {(console.log(`Hello ${name}`))
//                         console.log(`you are ${age} years old`)}
// hello("hassan ali", 20);

// // setTimeout(() => console.log("Hello"), 3000)

// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map((elements) => Math.pow(elements, 2))
// const cubes = numbers.map((elements) => Math.pow(elements, 3))
// const odd = numbers.filter((elements) => elements %2 === 1)
// const total = numbers.reduce((accumulator, element) =>  accumulator + element)

// console.log(odd)
// console.log(total)


// console.log(squares)