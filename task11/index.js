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






// ---------- PART #2 DOM --------------
// Properties: there are some properties you can get or set(change) or update
// .tagName
// .innertwxt
//.innerHTML
//.textcontent


// ATTRIBUTES:
// getAttribute
// let div = document.querySelector("div")

// let id= div.getAttribute("id")
// console.log(id)

// let a = document.querySelector("div")

// let val = div.getAttribute("name")
// console.log(val)

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"))

// console.log(para.setAttribute("class", "hasan"))

// div.setAttribute(div, "hassan")


// ------- .style method ----------
// let dv = document.querySelector("div")

// div.style.backgroundColor = "purple"

// div.style.fontSize = "24px"

// div.innerText = "Hello From Javascript"

// ---------add/remove----------

// let para = document.querySelector("p")

// para.classList.add("newClass", "font")


// para.classList.remove("newClass")



// const myButton = document.getElementById("myButton")

// myButton.classList.add("enabled")
// myButton.classList.remove("enabled")
// myButton.classList.add("hover")


// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });


// Practice
// ---------Build a simple webpage where clicking a button changes the background color or text.-------------

// let myBtn = document.querySelector("button")

// myBtn.addEventListener("click", event => {
//     myBtn.style.backgroundColor = "yellow"
//     myBtn.style.color = "red"
//     myBtn.innerText = "Ouch!🥴"
// })       


// Create element

// let para = document.createElement("p")
// para.innerText = "Hello my name is hassan"

// let newDiv = document.createElement("div");
// newDiv.innerText = "Hello from java script";

// append and appendChild
// document.body.appendChild(newDiv)
// document.body.append("some text", para , newDiv) // can add text and multiple elements

// remove and removeChild
// document.body.removeChild(newDiv);  // needs a parent

// newDiv.remove(); // directle removes it


// ---------------TO DO LIST APP---------------------

// let btn = document.getElementById("addBtn");

//     btn.addEventListener("click", () => {
//       let input = document.querySelector("input")
//       if(!input.value.trim())
//           return;

//       let li = document.createElement("li");
//       li.innerHTML = `${input.value} <button>Delete</button>`;
//       li.querySelector("button").onclick = () => li.remove();

//       document.getElementById("taskList").appendChild(li);
//       input.value= ""; 
//     })

//--------------EVENTS IN JAVASCRIPT---------------------
// tThe change in the state of ana object is known as event

// let Btn = document.querySelector("#btn1")

// Btn.onclick = (evt) => {
//   console.log("btn1 was clicked")
//   let a = 25;
//   a++;
//   console.log(a)
//   console.log(evt)
//   console.log(evt.type)
//   console.log(evt.target)
//   console.log(evt.clientX, evt.clientY)
// }


// let box = document.querySelector("div")
// box.onmouseover = () => {
//   console.log("you are inside the div")
// }


// ----------Event Listeners---------------
// Btn.addEventListener("click", (evt) => {
//   console.log("button1 was clicked - handler1")
// //   console.log(evt)
// //   console.log(evt.type)
// })

// Btn.addEventListener("click", () => {
//   console.log("button1 was clicked - handler2")
// })

// Note: the callback reference should be same to remove
// const handler3 = () => {
//   console.log("button1 was clicked - handler3")
// }

// Btn.addEventListener("click", handler3);

// Btn.addEventListener("click", () => {
//   console.log("button1 was clicked - handler4")
// })

// // Note: the callback reference should be same to remove
// Btn.removeEventListener("click", handler3)



// ------------PRACTICE QUESTION-----------------
// let btn = document.querySelector("#mode")
// let currMode = "light" ;


// btn.addEventListener("click", () => {
//   if(currMode === "light"){
//     currMode = "dark"
//     document.querySelector("body").style.backgroundColor = "black"
//   }
//   else{
//     currMode = "light"
//     document.querySelector("body").style.backgroundColor = "aqua"
  
//   }
//   console.log(currMode)
// })


// using class-list
// let body = document.querySelector("body")

// btn.addEventListener("click", () => {
//   if(currMode === "light"){
//     currMode = "dark"
//     body.classList.add("dark")
//     body.classList.remove("light")

//   }
//   else{
//     currMode = "light"
//     body.classList.add("light")
//     body.classList.remove("dark")


  
//   }
//   console.log(currMode)
// })


//--------------- leet code problem --------------
// let count = 0;
//   const display = document.getElementById("count");

//   document.getElementById("inc").addEventListener("click", () => {
//     count++;
//     display.textContent = count;
//   });

//   document.getElementById("dec").addEventListener("click", () => {
//     count--;
//     display.textContent = count;
//   });

//   document.getElementById("reset").addEventListener("click", () => {
//     count = 0;
//     display.textContent = count;
//   });












