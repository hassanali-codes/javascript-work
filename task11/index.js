<<<<<<< HEAD
// ----Practice question1 -------
const firstPara = document.querySelector(".intro")
console.log(firstPara.textContent)
=======
// DOM NAVIGATION = The process of navigating through the structure of an HTML document using javascipt:

// .parentElement
// .children

// ------.parentElement---------
 const parElement = document.getElementById("pie")
 const parent = parElement.parentElement;
 parent.style.backgroundColor = "yellow"

//--------.children------------
const childElement = document.getElementById("vegetables")
const child = childElement.children;

// console.log(child)

child[2].style.backgroundColor = "yellow"

 Array.from(child).forEach(child => {
     child.style.backgroundColor = "yellow"
 })















>>>>>>> f7f977ffde2c1b38876cb1f3aca4a810fa28a22f

const allPara = document.querySelectorAll(".intro")
allPara.forEach((p, index) => {
    console.log(`paragraph ${index + 1}:`, p.textContent)
})

const fruitList = document.getElementById("fruit-list")
console.log("first fruit: ",fruitList.firstElementChild.textContent)
console.log("last fruit: ", fruitList.lastElementChild.textContent)

console.log(fruitList.textContent)


//  Changing Text in Elements


let element = document.createElement("p"); // Step 1: create
element.innerText = "Hello World!";         // Step 2: add text
document.body.appendChild(element);         // Step 3: put on page



element.textContent = "Hello from textcontent!"
element.innerHTML = "<b>Bold Text</b> and normal text";

// //  Changing Attributes

let img = document.querySelector("img");
console.log(img.getAttribute("src")); // cat.jpg

img.setAttribute("width", "500");

// //Changing Styles

element.style.color = "red";
element.style.backgroundColor = "yellow";

// Adding / Removing Classes
title.classList.add("highlight"); // Adds a class
title.classList.remove("highlight"); // Removes a class
title.classList.toggle("highlight"); // Adds if not present, removes if present


//  Mini Practice: Change background on button click 
// ------------ Problem No 2 -------------
function changeBG() {
    document.getElementById("title").classList.toggle("highlight");
  }


console.log(document.getElementById("title").classList);


// . Create an Element
const newDiv = document.createElement("div")
newDiv.textContent = "Hey I am new Here"

// Append element

document.body.appendChild(newDiv)


// Remove element

newDiv.remove();

//  Replace element 

const newHeading = document.createElement("h2");
newHeading.textContent = "I replaced the old heading!";
document.body.replaceChild(newHeading, document.querySelector("h1"));



// ------------------TO DO LIST APP------------------------------
const input = document.getElementById("taskInput");
  const btn = document.getElementById("addBtn");
  const list = document.getElementById("taskList");

  btn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    // Create list item
    const li = document.createElement("li");
    li.textContent = input.value + " "; // Add some space before button

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.addEventListener("click", () => li.remove());

    // Add delete button inside li
    li.appendChild(delBtn);

    // Add li to the list
    list.appendChild(li);

    // Clear input box
    input.value = "";
  });


 document.getElementById("colors").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.style.backgroundColor = "yellow";
    }
  });



//--------------- leet code problem --------------
let count = 0;
  const display = document.getElementById("count");

  document.getElementById("inc").addEventListener("click", () => {
    count++;
    display.textContent = count;
  });

  document.getElementById("dec").addEventListener("click", () => {
    count--;
    display.textContent = count;
  });

  document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    display.textContent = count;
  });

