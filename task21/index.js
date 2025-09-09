// --------------Task 21-----------------
// Static Methods : A normal method belongs to the object (you call it with object.method()).
//A static method belongs to the class itself (you call it with Class.method()).
class MathHelper {
    static add(a, b) {
        return a + b
    }
    static subtract(a, b) {
        return a - b
    }
    static multiply(a, b) {
        return a * b
    }
    static divide(a, b) {
        return a / b
    }
}
console.log(MathHelper.add(5, 3));
console.log(MathHelper.subtract(5, 3));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username
        User.userCount++;
    }
    static showCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello my username is ${this.username}`)
    }
}
const user1 = new User("Hassan ali")
const user2 = new User("Haider ali")
user1.sayHello()
user2.sayHello()
User.showCount()
























