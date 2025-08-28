// -------------Task 16 javascript------------------
// Synchrounous JavaScript
console.log("one")
console.log("two")
console.log("three") 

// // Asynchrounous JavaScript
setTimeout(() => {
    console.log("Hello World")
}, 4000)
console.log("four") 

// Callback function: A callback is a function passed as an argument to antoher funct-ion
function Sum(a, b){
    console.log(a + b)
}

function calc(a, b, sumCallback){
    sumCallback(a, b)
}
// calc(5, 6, Sum) 
calc(1, 2, (a, b) => {
    console.log(a + b)
})

const hello = () => {
    console.log("Hello World")
}
setTimeout(hello, 3000) 

// callback hell: Nested callbacks stacked below one another forming a apyramid structure
// Example of callback hell

function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("data: ", dataId)
        if(getNextData){
            getNextData()  
        }
}, 2000)
}
getData(1, () => {
    console.log("Fetching next data...")
    getData(2, () => {
            console.log("Fetching next data...")
        getData(3, () => {
            console.log("Fetching next data...")
            getData(4)
        });
    });
});

// Note: This style of programming becomes difficult to understand & manage
// to solve this problem we use Promises, Async/Await

// -------------Promises------------------
// A promise is an object in js.it has three states: pending, fulfilled, rejected(handlers: resolve, reject)
// Promise is used to handle asynchrounous operations in js

let promise = new Promise((resolve, reject) => {
    console.log("I am inside promise")
    resolve("Promise resolved")
    // reject("some error occured")
})

// in general programming: we dont create promises like this
function getData(dataId , getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data: ", dataId)
            resolve("data fetched")
            if(getNextData){
                getNextData()  
            }
    }, 5000)  
    })

}

    