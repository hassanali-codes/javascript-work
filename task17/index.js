// --------------Task 17----------------
// Practice problem 1:
// Create a function createCounter() that returns two methods: increment and 

function createCounter(start=0){
    let counter = start;
    return {
        increament(value = 1){
            counter += value
            return counter
        },
        decrement(value = 1){
            counter -= value
            return counter
        }
    }
}

const ctr = createCounter(10)
console.log(ctr.increament())
console.log(ctr.increament(5))
console.log(ctr.decrement(2))

// Practice Problem 2
// Write a function multiplyBy(n) that uses closures to create a multiplier function. 
function multiplyBy(n){
    return function(x){
        return x * n
    }
}

const double = multiplyBy(2)
console.log(double(5))



















