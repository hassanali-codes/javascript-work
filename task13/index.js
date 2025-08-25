// --------------TASK 13------------
// Spread & Rest Operators
const d = [1,2,3]
const e = [4, 5]

const copy = [...d]
console.log(copy)

const merged = [...d, ...e]
console.log(merged)

const middle = [0, ...d, ...e, 100]
console.log(middle)

const nums = [3, 8, 1]
console.log(Math.max(...nums))
console.log(Math.min(...nums))

console.log([...`Ali`]) // string: arra of characters

// In Objects
const nameId = {id: 1, name: 'Hassan', city: "lahore"}
const extra = {city: "Karachi", name: "Ali"}

const copyObj = {...nameId}

console.log(copyObj)

// merge (later keys overwrite earlier ones)
const mergeObj = {...nameId, ...extra}
console.log(mergeObj)


// REST OPERATORS:
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

let mergd = [...arr1, ...arr2]
console.log(...mergd)
























