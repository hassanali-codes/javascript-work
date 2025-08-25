// -------------------TOD LIST APP-------------------------

let form = document.getElementById("todoForm");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// When form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh

  let taskText = taskInput.value.trim();
  if (taskText === "") return; // ignore empty input

  // Create a new <li> element
  let li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove(); // delete when clicked

  // Add strike-through on double click
  li.addEventListener("dblclick", () => {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  // Put delete button inside the <li>
  li.appendChild(delBtn);

  // Add <li> to the list
  taskList.appendChild(li);

  // Clear input after adding
  taskInput.value = "";
});





































