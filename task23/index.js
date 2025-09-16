// -------------Task 23--------------
// ---------------Practice-----------
// clousers
function returnFunc(){
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            let a = 2
            console.log(a)
            const z = () => {
                let a = 3
                console.log(a)
            }
            z()
        }
        y()
    }
    return x
}
let a = returnFunc()
a()  

// ------------Encapsulation-------------
// 

function createCounter(){
    let counter = 0

    return {
        increament: function(){
            counter++
        },
        decrement: function(){
            counter --
        },
        getCounter: function(){
            return counter
        }
    }
}

let count = createCounter();
count.increament()
console.log(count.getCounter())
console.log(count.counter)


