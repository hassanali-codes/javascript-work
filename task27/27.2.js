// Leetcode style Problem:
let num1 = [1,2,3,4,5]
let num2 = [2,4,6,8,10]

let res = num1.filter((val) => num2.includes(val))

console.log(res)

// time complexity is O(n . m) where n and m are lengths of num1 and num2 respectively