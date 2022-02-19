let taskListSection = document.querySelector(".task-list-section ol");
function checkForEmpty() {
    if (taskListSection.querySelector("li")) {
        document.querySelector(".task-list-section .show-task").style.display = "block";
        document.querySelector(".task-list-section .no-task").style.display = "none";
    } else {
        document.querySelector(".task-list-section .show-task").style.display = "none";
        document.querySelector(".task-list-section .no-task").style.display = "block";
    }
}

function insertIntoList(taskName) {
    // let taskListSection = document.querySelector(".task-list-section ol");
    let liElement = document.createElement("li");
    liElement.textContent = taskName;
    taskListSection.append(liElement);
    checkForEmpty()
}

let addTaskBtn = document.querySelector(".addTask");
addTaskBtn.addEventListener("click", function () {
    let taskInput = document.querySelector(".todo-input").value;
    document.querySelector(".todo-input").value = ""
    console.log(taskInput)
    insertIntoList(taskInput);
});

taskListSection.addEventListener("click", function (e) {
    e.target.remove();
    checkForEmpty()
});
