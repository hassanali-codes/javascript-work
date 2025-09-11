// ----------Task 22--------------
// ---------LeetCode Problem 2--------
// Remove duplicate from sorted ARRAY

let arr = [1,1,2,2,3,3,4,4]
let newarr = []
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] !== arr[i + 1]){
        newarr.push(arr[i])
    } 
}
console.log(newarr)  
