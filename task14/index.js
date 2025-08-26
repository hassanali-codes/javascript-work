// compare: linear and binary search
// linear O(n): Good for small or unsorted arrays
// binary O(log n): Good for large sorted arrays


// ----------------LeetCode Style Problem-----------------
// Problem: Find Index of First Occurrence of Target in Array
function  findIndex(arr, target){
    for(let i=0; i< arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1,2,3,3,3,34,5], 3)); 


// Problem 2:

function searchInsert(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left; 
}

console.log(searchInsert([1,3,5,6], 5)); 
console.log(searchInsert([1,3,5,6], 2)); 
console.log(searchInsert([1,3,5,6], 7)); 



















