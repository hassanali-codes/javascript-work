let btn = document.querySelector("#mode")
let currMode = "light" ;


btn.addEventListener("click", () => {
  if(currMode === "light"){
    currMode = "dark"
    document.querySelector("body").style.backgroundColor = "black"
  }
  else{
    currMode = "light"
    document.querySelector("body").style.backgroundColor = "aqua"
  
  }
  console.log(currMode)
})


// using class-list
let body = document.querySelector("body")

btn.addEventListener("click", () => {
  if(currMode === "light"){
    currMode = "dark"
    body.classList.add("dark")
    body.classList.remove("light")

  }
  else{
    currMode = "light"
    body.classList.add("light")
    body.classList.remove("dark")


  
  }
  console.log(currMode)
})

