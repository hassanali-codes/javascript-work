// --------------Task 21-----------------
// Getters & Setters: Getters and setters are used for encapsulation (control how we read/write a property).

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    // getter
    get age() {
        return this._age;
    }
    get name(){
        return this._name
    }
    set age(value){
        if(value > 0){
            this._age = value;
        }
        else{
            console.log("Age must be positive")
        }
    }

    set name(newName){
        if(typeof newName === "string" && newName.length > 0){
            this._name = newName
        }
        else{
            console.log("name must be  a non-empty string")
        }
    }
}
const p1 = new Person("Hassan Ali", 20)
// p1.age = -5  // age must be positive
p1.age = 25 // update    
p1.name = "Haider Ali"
console.log(p1.name)
console.log(p1.age) 

























