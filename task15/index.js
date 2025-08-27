// task 15
let p = 9  //global scope
function test() {
    let a = 8;      //local scope
    console.log(a)
    console.log(p)

    
}
test();
console.log(p)
// console.log(a)



let x  = 3

function2()

function function1() {
    let x = 1
    console.log(x)
}
function function2() {
    let x = 3
    console.log(x)
}



let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar);  
  console.log(localVar);   
}
testScope();

console.log(globalVar); 
// console.log(localVar);     // Error: localVar is not defined

let name = "Hassan"

function greet(){
    let greeting = "Hello"
    if(true) {
        const lastName = "Ali"
        console.log(greeting + " " + name + " " + lastName)
    }
}

console.log(name) // Global scope

greet();
console.log(greeting + " " + lastName) // Error: greeting is not defined and also lastName is not defined


