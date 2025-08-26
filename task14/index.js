// linear search algorithm:
`1. Iterate through each element of the array.
2. Compare the current element with the target value.
3. If a match is found, return the index of the element.
4. If the end of the array is reached without finding the target, return -1 
to indicate that the target is not present in the array.`


function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5], 6))

























