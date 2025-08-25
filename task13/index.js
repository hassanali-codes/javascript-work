// --------------TASK 13---------------
const add = (a,b) => {
    return a + b
}

console.log(add(5, 6))

// 0 parameters
const sayHi = () => console.log("Hi");

const square = n => n * n;
// or
const square2 = (n) => n * n;

const ad = (a, b) => a + b;

const sum = (a, b) => {
  const result = a + b;
  return result; // must write return when using { }
};


const makeUser = (name) => ({ name, active: true });

console.log(makeUser("Hassan ali")) 


const bad = () => { foo: 1 };      
const good = () => ({ foo: 1 });   

const double = x => x * 2;          // implicit return (no { })
const double2 = (x) => { return x * 2; }; // explicit return (with { })

double2(5)
console.log(double(5))      

function show() {
  console.log(this);
}

show(); // In browser → "window" (the global object)


const person = {
  name: "Ali",
  friends: ["Ahmed", "Sara"],
  showFriends: function() {
    this.friends.forEach(friend => {
      console.log(this.name + " knows " + friend);
    });
  }
};

person.showFriends();



const counter = {
  value: 0,
  //  using arrow here: `this` won’t be the object
  incBad: () => { this.value++; },

  //  use a regular function so `this` is the object 
  incGood() { this.value++; }
};

console.log(counter)


// --------- Practice: Convert to arrow function-----------------
const square3 = x => {
  return Math.pow(x, 2)     
}
console.log(square3(5))




















