// --------------EVENTS IN JAVASCRIPT---------------------
// tThe change in the state of ana object is known as event

let Btn = document.querySelector("#btn1")

Btn.onclick = (evt) => {
  console.log("btn1 was clicked")
  let a = 25;
  a++;
  console.log(a)
  console.log(evt)
  console.log(evt.type)
  console.log(evt.target)
  console.log(evt.clientX, evt.clientY)
}


let box = document.querySelector("div")
box.onmouseover = () => {
  console.log("you are inside the div")
}


// ----------Event Listeners---------------
Btn.addEventListener("click", (evt) => {
  console.log("button1 was clicked - handler1")
//   console.log(evt)
//   console.log(evt.type)
})

Btn.addEventListener("click", () => {
  console.log("button1 was clicked - handler2")
})

// Note: the callback reference should be same to remove
const handler3 = () => {
  console.log("button1 was clicked - handler3")
}

Btn.addEventListener("click", handler3);

Btn.addEventListener("click", () => {
  console.log("button1 was clicked - handler4")
})

// Note: the callback reference should be same to remove
Btn.removeEventListener("click", handler3)
