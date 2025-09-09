// --------------Task 21-----------------

// ----------Bank Account Task-----------
class BankAccount{
    #balance = 0

    constructor(owner){
        this.owner = owner 
    }

    deposite(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Deposited ${amount}`)
        }
        else{
            console.log("Invalid amount")
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdrew ${amount}`)
        }
        else{
            console.log("Not enough balance")
        }
    }
    //    getter to getbalance
    getBalance(){
        return `your current balance is rupees ${this.#balance}`;
    }
}

const acc1 = new BankAccount("Hassan Ali")
acc1.deposite(1000);
acc1.withdraw(200)
console.log(acc1.getBalance());




















