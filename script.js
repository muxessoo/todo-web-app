const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    var text = taskInput.value.trim();
    if (text === "") return;

    // Create li
    var li = document.createElement("li");

    // Checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("checked");
        } else {
            li.classList.remove("checked");
        }
    });

    // Task text
    var span = document.createElement("span");
    span.textContent = text;

    // Delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});