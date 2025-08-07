// ---------------------Task problems-----------------------
// PROBLEM NO# 1:

// const nums = [1,2,3,4,5,6,7,8,9,10]
// const double = nums.map(doubled)
// const even = nums.filter(isEven)

// console.log(even)

// console.log(double)


// function doubled(numbers){
//     return numbers * numbers
// }

// function isEven(elements){
//     return elements % 2 === 0 
// }

// DIFFERENCE BETWEEN MAP AND FOREach()
// *) as i learned in todays task the main key difference in map and foreach is that map returns a new array foreach donot return a new array
// it changes the original array.


// PROBLEM NO # 2
// You are given an array of student objects with name and score
// Return names of students who scored above

// const data = [
//     {name:'hasan',score:30},
//     {name:'haider',score:100},
//     {name:'ali',score:60},
//     {name:'adnan',score:84},
//     {name: 'ismail' , score: 75},
//     {name:'vicky bhai',score:90},
//     {name:'jaffer bhai',score:80},
// ]

// let topScorer = data[0].score;
// let name = data[0].name;
// for(let i = 0; i<data.length; i++){
//     if(data[i].score > topScorer)
//         topScorer = data[i].score
//         name = data[i].name


// }
// console.log(`${name} is the top scorrer who scored ${topScorer} marks`)  


//Problem 3 :
// Given a sentence, capitalize the first letter of each word
// Input: "hello world" → Output: "Hello World"


// function capitalizeWord(sentence) {
//   return sentence.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");                              
// }

// let sentence = capitalizeWord("hello world")
// console.log(sentence)


// ---------------Leet code----------------
//Find the Index of the First Unique Character in a String

// let str = "leetcode"
// let unique = ""
// for(let i=0; i< str.length; i++){
//     if(!str[i].length >1){
//         unique = str[i]   
//     }
// }

// console.log(unique)

// let name = "loveleetcode"

function firstUniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        let isUnique = true;

        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {   
            return i;
        }
    }

    return -1;
}

// Test cases
console.log(firstUniqueChar("loveleetcode")); 


// ---------------Operation using Array Methods---------------------
// --------------------Practice-------------------------------------

// array = a avriable like structure that can hold more than one value

// let fruits = ["banana","apple", "mango", "orange" ] 

// fruits.push("coconut")  // to push element at the end of an array
// fruits.pop() // rewmove value at the end of array
// fruits.unshift("guava") // add given value at beginning
// fruits.shift()

// fruits.sort().reverse();

// let length = fruits.length;
// console.log(length)

// let index = fruits.indexOf("apple")
// console.log(index)

// fruits[3] = "coconut";

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// for(let fruit of fruits){
//     console.log(fruit)
// }

// for(let i = 0; i < fruits.length; i++){

//     console.log(fruits[i])
//     console.log("\n")
// }
// for(let i = fruits.length - 1; i >= 0 ; i--){
//     console.log(fruits[i])
//     console.log("\n")
// }


// let num = [1,2,3,4,5,6,7,8]

// let n = num.includes(3)
// let n = num.slice(0, 2)  // copy a part of array without changing the original array


//---- array.splice(start, deleteCount, item1, item2, ...) // syntax of splice. Use To add, remove, or replace elements in an array.----

// let colors = ["red", "green", "blue", "yellow"];
// colors.splice(1, 2); // remove 2 items starting from index 1
// console.log(colors); // ["red", "yellow"]

// let nums = [1, 2, 5];
// nums.splice(2, 0, 3, 4); // at index 2, delete 0, add 3 and 4
// console.log(nums); // [1, 2, 3, 4, 5]


// let names = ["Ali", "Ahmed", "Zara"];
// names.splice(1, 1, "Sana"); // remove 1 item at index 1 and add "Sana"
// console.log(names); // ["Ali", "Sana", "Zara"]


// console.log(n)
// console.log(num)



// -----Filter method in javascript------
// creates a new array by filtering out elements.
// let num = [1,2,3,4,5,6,7]
// let even = num.filter(isEven)
// let odd = num.filter(isOdd)

// console.log(even)
// console.log(odd)

// function isEven(numbers){
//     return numbers %2 === 0;
// }

// function isOdd(numbers){
//     return numbers %2 !== 0;
// }

// let age = [12,17,18,19,20]
// let adults = age.filter(isAdult)
// let childrens = age.filter(isChildrens)

// console.log(adults)
// console.log(childrens)

// function isAdult(n){
//     return n >= 18
// }
// function isChildrens(n){
//     return n < 18
// }

//  --------Map in javascript--------
// accepts a callback and applies that function to each element of an Array, then return a new array
// let num = [1,2,3,4,5]

// let squares = num.map(square)
// console.log(squares)

// function square(numbers){
//     return Math.pow(numbers, 2);
// }

// const cube = num.map((a) => {
//     return Math.pow(a, 3)
// })


// console.log(cube)

// const dates = ["2024-5-10", "2025-2-20", "2026-6-30"]
// let foramtDate = dates.map(formatDates)
// console.log(foramtDate)

// function formatDates(elements){
//     const parts = elements.split("-")
//     return `${parts[2]}/${parts[1]}/${parts[0]}`
// }

//  -------Reduce method in javascript------
// .reduce() = reduce the element of an araray to a single value
// let arr = [1,2,3,4,5]
// let total = arr.reduce(sum)

// console.log("$",total.toFixed(2))

// function sum(total, current){
//     return total + current
// }
 
// const grades = [70, 80, 60, 50, 85]
// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin)
// console.log(maximum)
// console.log(minimum)

// function getMax(a, b){
//     return Math.max(a, b)
// }

// function getMin(a, b){
//     return Math.min(a, b)
// }


// const words = ["I", "love", "javascript"]
// const join = words.reduce((total, word) => {
//     return total + " " + word
// })


// console.log(join)


// const nums = [2, 3, 4];

// const product = nums.reduce((total, current) => total * current, 1);

// console.log(product);  



// const letters = ["a", "b", "a", "c", "b", "a"];

// const count = letters.reduce((total, char) => {
//     total[char] = (total[char] || 0) + 1;
//     return total;
// }, {})

// console.log(count)

// ------- For each()---------
// method used to iterate over the elements of an array and apply function (callback) to each element
// array.forEach(callback)
// element, index, array are provided

// let num = [1,2,3,4,5,6,7]
// num.forEach(square)
// num.forEach(display)

// function doubled(element, index, array){
//     array[index] = element * 2
// }
// function tripled(element, index, array){
//     array[index] = element * 3
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2)
// }


// function display(elements){
//     console.log(elements)
// }



























































