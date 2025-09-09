// --------------Task 21-----------------

// Private Fields:In JavaScript, you can make a property private by putting # before its name.
// A private field can only be accessed inside the class.

// UserAccount program
class UserAccount{
    #password;

    constructor(username){
        this.username = username;
        this.#password = "";
    }
    setPassword(newPassword){
        if(newPassword.length >= 6){
            this.#password = newPassword  
        }
        else{
            console.log("the lenght of password must be greater than or equal to 6")
        }
    }

    checkPassword(input){
        if(input === this.#password){
            return true
        }
        else{
            return false;
        }
    }
}

const user1 = new UserAccount("Hassan")
user1.setPassword("1234")
user1.setPassword("Hassan1526")
console.log(user1.checkPassword("hassan1526"))
console.log(user1.checkPassword("Hassan1526"))



















