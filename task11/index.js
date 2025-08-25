// 2. DOM MANIPULATION:

// By ID
let head = document.getElementById("heading")
console.log(head)

// By Class
let headings = document.getElementsByClassName("head-class")
console.log(headings) 
console.dir(headings)

// By Tag:
let paras = document.getElementsByTagName("p")
console.log(paras)
console.dir(paras)


// Query Selector:
let elements = document.querySelector(".head-class")  //return 1st element.can access id and class both.
console.dir(elements)

let allEl = document.querySelectorAll(".head-class")   // all elements
console.dir(allEl) 

//firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// parentElement
// childrens