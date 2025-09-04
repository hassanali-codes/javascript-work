// -----------------TASK 20---------------------------
class BankAccount {
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
    }
    deposite(amount){
        this.balance += amount
        console.log(`${this.owner} deposited $${amount}`)
        console.log(`your Balance after deposite: $${this.balance}`) 

    }

    withdraw(amount){
        this.balance -= amount
        console.log(`${this.owner} withdrew $${amount}`)
        console.log(`your Balance after withdraw: $${this.balance}`) 
    }

    showBalance(){
        console.log(`your total balace is $${this.balance}`)
    }
}

const acc1 = new BankAccount("Hassan ali", 1000)
const acc2 = new BankAccount("Haider ali", 2000)

acc2.showBalance()

acc1.deposite(500)
acc2.withdraw(1500)






