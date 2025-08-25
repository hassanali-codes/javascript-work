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
