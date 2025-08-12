// DOM NAVIGATION = The process of navigating through the structure of an HTML document using javascipt:

// .parentElement
// .children

// ------.parentElement---------
// const parElement = document.getElementById("pie")
// const parent = parElement.parentElement;
// parent.style.backgroundColor = "yellow"

//--------.children------------
const childElement = document.getElementById("vegetables")
const child = childElement.children;

// console.log(child)

child[2].style.backgroundColor = "yellow"

// Array.from(child).forEach(child => {
//     child.style.backgroundColor = "yellow"
// })


































