
// ---------------TO DO LIST APP---------------------

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