// -------------------TOD LIST APP-------------------------

let form = document.getElementById("todoForm");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh

  let taskText = taskInput.value.trim();
  if (taskText === "") return; 

  // Create a new <li> element
  let li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove(); 

  li.addEventListener("dblclick", () => {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  li.appendChild(delBtn);

  taskList.appendChild(li);

  taskInput.value = "";
});





































