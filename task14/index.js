// Binary Search Algorithm (only works on sorted arrays)

` 1. find the middle element of the array
  2. if the middle element = target -> return the index
  3. if target < middle -> search in the left half
  4. if target > middle -> search in the right half
  5. repeat until the target is found or the array is empty`

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length -1;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            low =  mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,1000,2000,3000,4000], 2000)) 























