// ----------javascript Events------------
// let button = document.getElementById("btn")

// button.addEventListener("click", () => {
//     alert("Button clicked with addEventlistener")
// })
//  const myButton = document.getElementById("btn")


// const mybutton = document.getElementById("myBtn")
// const button = document.getElementById("myBox")

// mybutton.addEventListener("click", event => {
//     button.style.backgroundColor = "tomato"
//     button.textContent = " OUCH!🤕"

// })

// mybutton.addEventListener("mouseover", event => {
//     button.style.backgroundColor = "yellow"
//     button.textContent = "Don't do it 😲"
// })

// mybutton.addEventListener("mouseout", event => {
//     button.style.backgroundColor = "lightgreen"
//     button.textContent = "Click Me 😊"
// })

// Hover Button

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



//   let input = document.getElementById("myInput");

//   // Key Down
//   input.addEventListener("keydown", (event) => {
//     console.log("Key down:", event.key);
//   });

//   // Key Up
//   input.addEventListener("keyup", (event) => {
//     console.log("Key up:", event.key);
//   });

//   // Key Press (older, not recommended)
//   input.addEventListener("keypress", (event) => {
//     console.log("Key pressed:", event.key);
//   });



// let form = document.getElementById("myForm");

//   let nameInput = document.getElementById("name");
//   let output = document.getElementById("output");

//   // Input event (fires as you type)
//   nameInput.addEventListener("input", () => {
//     output.innerText = "Typing: " + nameInput.value;
//   });

//   // Change event (fires when input loses focus after typing)
//   nameInput.addEventListener("change", () => {
//     console.log("Final input value:", nameInput.value);
//   });

// // Submit event
//   form.addEventListener("submit", (event) => {
//     event.preventDefault(); // stop page refresh
//     output.innerText = "Form submitted with: " + nameInput.value;
//   });



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




// -------------------TOD LIST APP-------------------------

let form = document.getElementById("todoForm");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// When form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh

  let taskText = taskInput.value.trim();
  if (taskText === "") return; // ignore empty input

  // Create a new <li> element
  let li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove(); // delete when clicked

  // Add strike-through on double click
  li.addEventListener("dblclick", () => {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  // Put delete button inside the <li>
  li.appendChild(delBtn);

  // Add <li> to the list
  taskList.appendChild(li);

  // Clear input after adding
  taskInput.value = "";
});
































