// -----------------TASK 20---------------------------
class car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    getdetails() {
        return ` ${this.make} \n Model no. ${this.model} \n year ${this.year}`
    }
}
const info = new car("BMW", "M4 COMP", "2024");
console.log(info.getdetails())
