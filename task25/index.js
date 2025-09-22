// ----------------TASK 25----------------

let arr = [1,2,3,4,5,6,7]

function findIndex(arr, target){
    for(let i=0; i< arr.length; i++){
        for(let j=i+1; j< arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i+1, j+1] 
            }
        }
    }
}

console.log(findIndex(arr, 13))




