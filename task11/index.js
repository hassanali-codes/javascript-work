// Create element

let para = document.createElement("p")
para.innerText = "Hello my name is hassan"

let newDiv = document.createElement("div");
newDiv.innerText = "Hello from java script";

// append and appendChild
document.body.appendChild(newDiv)
document.body.append("some text", para , newDiv) // can add text and multiple elements

// remove and removeChild
document.body.removeChild(newDiv);  // needs a parent

newDiv.remove(); // directle removes it

