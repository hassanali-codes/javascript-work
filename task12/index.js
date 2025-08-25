// ----------javascript Events------------
const mybutton = document.getElementById("myBtn")
let button = document.getElementById("btn")

 mybutton.addEventListener("mouseover", event => {
    button.style.backgroundColor = "yellow"
    button.textContent = "Don't do it 😲"
})

mybutton.addEventListener("mouseout", event => {
    button.style.backgroundColor = "lightgreen"
    button.textContent = "Click Me 😊"
})

// Hover Button

const myButton = document.getElementById("myButton")

myButton.classList.add("enabled")
myButton.classList.remove("enabled")
myButton.classList.add("hover")


myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
})

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});



  let input = document.getElementById("myInput");

  // Key Down
  input.addEventListener("keydown", (event) => {
    console.log("Key down:", event.key);
  });

  // Key Up
  input.addEventListener("keyup", (event) => {
    console.log("Key up:", event.key);
  });

  // Key Press (older, not recommended)
  input.addEventListener("keypress", (event) => {
    console.log("Key pressed:", event.key);
  });





































