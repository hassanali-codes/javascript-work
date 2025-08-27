// task 15

// Block Scope (let & const) vs Function Scope (var)
if(true){
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 1000);
}
// Note: Because var is function-scoped, the same i is shared across all iterations.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 100);
}
// Note: with let, a new i is created for each iteration.(block scope)

for(const i = 0; i < 3; i++) {
  setTimeout(() => console.log("const:", i), 100);
} 
// Note: This will throw a TypeError because const cannot be reassigned.


let j = 0
while(j < 3) {
    const k = j;
    setTimeout(() => console.log("while const:", k), 100);
    j++;
}
