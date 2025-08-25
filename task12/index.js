// ----------javascript Events------------
 let form = document.getElementById("myForm");

  let nameInput = document.getElementById("name");
  let output = document.getElementById("output");

  // Input event (fires as you type)
  nameInput.addEventListener("input", () => {
    output.innerText = "Typing: " + nameInput.value;
  });

  // Change event (fires when input loses focus after typing)
  nameInput.addEventListener("change", () => {
    console.log("Final input value:", nameInput.value);
  });

// Submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page refresh
    output.innerText = "Form submitted with: " + nameInput.value;
  });



let btn = document.getElementById("addBtn");

    btn.addEventListener("click", () => {
      let input = document.querySelector("input")
      if(!input.value.trim())
          return;

      let li = document.createElement("li");
      li.innerHTML = `${input.value} <button>Delete</button>`;
      li.querySelector("button").onclick = () => li.remove();

      document.getElementById("taskList").appendChild(li);
      input.value= ""; 
    })





































