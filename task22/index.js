// ----------Task 22--------------
// ---------LeetCode Problem 1--------
// Reverse Integer
// 12345 ---> 54321

function reversedNumber(num){
    if(num >= 0 && num <=9){
        return num 
    }
    let reversedNum = 0
    while(num!= 0){
        reversedNum = reversedNum * 10 + (num% 10) 
        num = Math.floor(num/10)
    }
    return reversedNum
}

console.log(reversedNumber(1234))