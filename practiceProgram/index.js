// ----------Practice Task----------

class Person {
    constructor(hardwork, luck, success){
        if(typeof hardwork !== "number" || hardwork < 1 || hardwork > 95){
            throw new Error("hardwork must be an integer between 1 and 95");
            
        }
        if(typeof luck !== "number" || luck < 1 || luck > 5){
            throw new Error("luck must be an integer between 1 and 5");
            
        }
        this.hardwork = hardwork;
        this.luck = luck 
        this.success = success
    } 
}

let arr = []
for(let i=0; i < 100000; i++){
    hardwork = Math.floor(Math.random() * 95) + 1
    luck = Math.floor(Math.random() * 5) + 1
    let success = hardwork + luck
    let person = new Person(hardwork, luck, success)    
    arr.push(person)
}

arr.sort((a, b) => b.success - a.success)

for(let i=0; i < 3; i++){
    console.log(arr[i])
}
       




















