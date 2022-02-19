function insertIntoList(taskName) {
    let taskListSection = document.querySelector(".task-list-section ul");
    let liElement = document.createElement("li");
    liElement.textContent = taskName;
    taskListSection.append(liElement)

}

let addTaskBtn = document.querySelector(".addTask");
addTaskBtn.addEventListener("click", function (e) {
    let taskInput = document.querySelector(".todo-input").value;
    document.querySelector(".todo-input").value = ""
    console.log(taskInput)
    insertIntoList(taskInput);
})