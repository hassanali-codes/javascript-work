// --------------Task 17----------------

// closure and lexical scope
message = "Good global"
function hello1(){
    let message = "good morning"
        // let message = "good afternoon"
        console.log("Hello 1 " + message)
    let c = function hello2(){
        console.log("I am c " + message )
    }
    return c
}
c = hello1()
c()  

function init(){
    var name = 'Mozilla'    // name is a local variable created by init
    // displayName() is the inner function, a closure
    function displayName(){
        console.log(name)  // use variable declared in the parent function
    }
    name = "Hassan ali"
    return displayName;
}
c= init();
c()      

function outer() {
  let counter = 0;        // 1) counter is created in outer's scope

  function inner() {      // 2) inner closes over `counter`
    counter++;            // 3) inner reads/modifies `counter`
    return counter;
  }

  return inner;           // 4) return the function itself (not a value)
}

const increase = outer(); // 5) outer runs once -> counter = 0, returns inner
console.log(increase());  // 6) calls inner -> counter becomes 1, logs 1
console.log(increase());  // 7) same inner -> counter becomes 2, logs 2
console.log(increase());  // 8) same inner -> counter becomes 3, logs 3


function bankAcc(){
    let balance = 100   // // private variable (not directly accessible outside)
    return {
        deposite(amount){
            balance += amount;      // can access balance via closure
        },
        withdraw(amount){
            balance -= amount 
        },
        getBalance(){
            return balance
        }
    }
}

const account = bankAcc();
console.log(account.deposite(99900))
console.log(account.getBalance())


// closure in loops
for (var i=1; i <= 3; i++){
    setTimeout(() => console.log(i), 1000)
}

for(let i=1; i<=3;  i++){
    setTimeout(() => console.log(i), 1000)
}

























