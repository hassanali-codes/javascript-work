// --------------Task 17----------------
// ----------------------Leet code Style----------------------
//Write a function that returns a counter function. Each time it is called, it should return an incremented value.

function start(){
    let counter = 0
    function inner(){
        counter ++
        return counter
    }
    return inner
}

const st = start()
console.log(st())
console.log(st())  
console.log(st())
console.log(st())
console.log(st())
console.log(st())
console.log(st())

















