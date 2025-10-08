function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;
    // Mark task as completed on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create delete button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = ""; // Clear Input field after adding
}
