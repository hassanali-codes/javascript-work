// -----------------TASK 20---------------------------
// Classes in javascript: (ES6 feature) provides a more structured and cleaner wat to work with objects compared to traditional constructor functions:

class Products{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    displayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: $${this.price.toFixed(2)}`)
    }
    calcTotal(sales){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05

const product1 = new Products("shirt", 19.99)
const product2 = new Products("pant", 20.00)
const product3 = new Products("underwear", 100.00)

product3.displayProduct();           

const total = product3.calcTotal(salesTax)

console.log(`Total price (with tax): $${total.toFixed(2)}`)
















