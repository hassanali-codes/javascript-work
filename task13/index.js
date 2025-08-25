// --------------TASK 13------------
//  Destructing
let arr = [1,2,3]
let [a,b,c] = arr

console.log(a)
console.log(b)
console.log(c)


let person1 = { name1: "Ali", age1: 20, city1: "Karachi" };
let { name1, age1, city1 } = person1;

console.log(name1); 
console.log(age1);  
console.log(city1); 


let [x, y= 2] = [5]
console.log(Math.pow(x, y))
console.log(y)  


let arr1 = {name: "Ali", age: 20, city: "Karachi"}
let {name, age, city} = arr1

console.log(name)
console.log(age)
console.log(city)

// Swap two variables using array destructuring.
let  num1 = 5;
let num2 = 10;

[num1, num2] = [num2, num1]

console.log(num1, num2)






















