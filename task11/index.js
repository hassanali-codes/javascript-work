// Navigating The DOM:

// const heading = document.getElementById("title");
// console.log(heading.textContent); // Hello

const firstPara = document.querySelector(".text")
console.log(firstPara.textContent)  

const allPara = document.querySelectorAll(".text")
allPara.forEach(p => console.log(p.textContent))  

