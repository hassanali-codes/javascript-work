// ------------Task 10 Problems---------------
// Problem No #1
// 1. Reverse a string

// let str = "hassan ali"

// method 1
// result = str.split("").reverse().join(" ")
// console.log(result)

// method 2
// for(let i = str.length -1; i >= 0; i--){
//     console.log(str[i])
// }

// Problem No # 2
// 2. Check if string is a palindrome
// let word = "madam"

// let  palindromeWord = word.split("").reverse().join("");

// let result = true
// if(palindromeWord === word){
//     result = true
// }
// else{
//     result = false
// }

// console.log(result)

// Problem No 3 
// 3.Count vowels in a string

// let str = "javascript"
// let vowel = "aeiou"
// count = 0

// for(let i= 0; i < str.length; i++){
//     for(let char of vowel){
//         if(str[i] === char){
//             count += 1
//         }
//     }
// }
// console.log(count)


// Problem No # 4
// 4. Capitalize first letter of each word

// let str = "hello world"
// // let capitalized = str.map(capitalize)
// // console.log(capitalized)

// function capitalize(elements){
//   return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");                              
// }

// console.log(capitalize(str))


// 5. Find the longest word in a sentence

// let str = "my name is hassan ali"
// let words = str.split(" ")
// let largest = words[0]

// for(let i=0; i< words.length; i++){
//     if(words[i].length > largest.length){
//         largest = words[i]
//     }
// }
// console.log(largest)


//  -----------string methods and manipulation---------------
//  ------------PRACTICE Questions --------------------------


// let name = "HassanAli";
// console.log(name.charAt(3))
// console.log(name.indexOf("h"))
// console.log(name.lastIndexOf("a"))
// console.log(name.length)
// console.log(name.trim())
// console.log(name.slice(1, 3))
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.repeat(5));

// let result = name.startsWith(" ")
// let result = name.endsWith(" ")
// let result = name.includes(" ")


// if(result){
//     console.log("your name cannot include ' '")

// }
// else{
//     console.log(name)
// }

// console.log(name.replaceAll("a", "h"))

// let date = "8.7.2025"
// console.log(date.replace("5", "6"))
// console.log(date.repl// aceAll(".", "/"))

// let phone_number = "03 2333 25 171"

// console.log(phone_number.replaceAll(" ", "-"))
// let str1 = "Hello";
// let str2 = "World";
// let result = str1.concat(" ", str2);
// console.log(result); // "Hello World"                              

// let result = str1 + " " + str2; // "Hello World"



