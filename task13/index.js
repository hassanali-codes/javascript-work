// --------------TASK 13------------
// Create a function using rest that sums unlimited numbers
function Sum(...numbers){

  let result = 0;
  for(let number of numbers){
    result += number;
  }
  return result;

}

const total = Sum(1,2,3,4,5,6,7,8,9,10)
console.log(`your total is $${total}`) 


function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10




// --------------Leet Code Style Problem--------------
// Problem: Write a function twoSum(nums, target) that returns the indices of the two numbers that add up to target.

function twoSums(nums, target){
  for(let i=0; i < nums.length; i++){
    for(let j=0; j<nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
}

console.log(twoSums([1,2,3,4,5,6], 3))



























