// ---------- PART #2 DOM --------------
// Properties: there are some properties you can get or set(change) or update
// .tagName
// .innertwxt
// .innerHTML
// .textcontent


// ATTRIBUTES:
// getAttribute

let div = document.querySelector("div")

let id= div.getAttribute("id")
console.log(id)

let a = document.querySelector("div")

let val = div.getAttribute("name")
console.log(val)

let para = document.querySelector("p")
console.log(para.getAttribute("class"))

console.log(para.setAttribute("class", "hasan"))

div.setAttribute(div, "hassan")



// ------- .style method ----------
let dv = document.querySelector("div")

div.style.backgroundColor = "purple"

div.style.fontSize = "24px"

div.innerText = "Hello From Javascript"

// ---------add/remove----------

let para1 = document.querySelector("p")

para1.classList.add("newClass", "font")


para1.classList.remove("newClass")