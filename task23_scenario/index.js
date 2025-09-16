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


// ---------------Scenario Based Question-----------------

function bankAccount() {
    let balance = 0

    return {
        deposite: function(amount) {
            balance += amount
        },
        withdraw: function(amount){
            if(amount<= balance){
                balance -= amount
            }
            else{
                console.log("Not enough amount")
            }
        },
        getBalance: function(){
            return balance
        } 
    }
}

let account = bankAccount()
account.deposite(1000)
console.log(account.getBalance())
account.withdraw(500)
console.log(account.getBalance())
console.log(account.balance)

//-----------------------------------------------------------
// 👉 Question: How will you implement this using closures?
//-----------------------------------------------------------
// Ans: i use a closure by defining private balance inside a function and returning methods that can access it.
// thats why balance is hidden, i cannot access it from outside only the methods deposite, withdraw and getBalance can access it


