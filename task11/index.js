//access node from parent and child
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
