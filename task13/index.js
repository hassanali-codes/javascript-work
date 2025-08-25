// --------------TASK 13--------
// // Write an arrow function to check if a number is prime.

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
let name = "Hassan ali"
let age = 20
let isStudent = true
console.log(`my name is ${name}
            I am ${age} years old
            are you a student?: ${isStudent}`)


// Create a function that takes name & age and returns:
const func = (name, age) => {
  return `My name is ${name} and i am ${age} years old`
}

console.log(func("hassan ali", 20))





















