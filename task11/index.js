// DOM NAVIGATION = The process of navigating through the structure of an HTML document using javascipt:

//firstElementChild
// lastElementChild


//  ------------first and lastElementChild-------------

const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild
lastChild.style.backgroundColor = "yellow"

const ulElements = document.querySelectorAll("ul")

ulElements.forEach(ulElements => {
    const lastChild = ulElements.lastElementChild;
    lastChild.style.backgroundColor = "yellow"
})











































