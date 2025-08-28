// Task 16
// How to use promises

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success")
        reject("network error")
})
}
// in then and catch we pass functions
// then is for resolve
// catch is for reject
// both then and catch take one argument, a function
// the function in then takes one argument, the value passed in resolve
// the function in catch takes one argument, the value passed in reject
let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled", res);
})

promise.catch((err) => {
    console.log("Promise rejected", err);
})

// ---------Promise chaining----------------
// chaining means using one then after another
// the return value of one then is passed as argument to the next then
function async1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")
        }, 4000)
    })
}

function async2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success")
        }, 4000)
    })
}
console.log("fetching data 1...")
async1().then((res) => {
    console.log("fetching data 2...")
    async2().then((res) => {
    })
}) 


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
        }, 2000);
    })
 }

 console.log("fetching data 1...")
getData(1)
.then((res) => {
    console.log("fetching data 2...")
    return getData(2) // returning a promise
})
.then((res) => {
    console.log("fetching data 3...")
    return getData(3) // returning a promise
})
.then((res) => {
    console.log(res) 
})























