console.log("hello")
// alert("Hello Wolrd")

// WINDOW OBJECT:
console.log("Hello")
// window.alert("hello2")

// DOM (DOCUMENT OBJECT MODEL):
console.dir(document.body.childNodes[1])
console.log(document.body)

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


 
const elmnts = document.getElementById("vegetables")
const firstChild = elmnts.firstElementChild;
firstChild.style.backgroundColor = "yellow"


const ulElements = document.querySelectorAll("ul")

ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
})

let header = document.querySelector("h1")
console.log(header.textContent)
















