import { createTask, taskStorage } from "./task";
import { createList } from "./list";

let header = document.querySelector("header");
function createHeader() {


    const dashboardDiv = document.createElement("div");
    dashboardDiv.classList.add("dashboardDiv");

    const dashboardText = document.createElement("h2");
    dashboardText.textContent = "Dashboard";

    dashboardDiv.appendChild(dashboardText);
    header.appendChild(dashboardDiv);

    const navListDiv = document.createElement("div");
    navListDiv.classList.add("navListDiv");

    const newListButton = document.createElement("button");
    newListButton.classList.add("newListButton");
    newListButton.textContent = "New List";
    newListButton.addEventListener("click", createNewList);

    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("newTaskButton");
    newTaskButton.textContent = "New Task";
    newTaskButton.addEventListener("click", createNewTask);




    navListDiv.appendChild(newListButton);
    navListDiv.appendChild(newTaskButton);
    header.appendChild(navListDiv);
}

function createNewList() {

    const listForm = document.createElement("form");
    const dialoge = document.createElement("dialog");
    dialoge.classList.add("dialoge");
    const listNameLabel = document.createElement("label");
    listNameLabel.setAttribute('for', 'listName');
    listNameLabel.textContent = "List Name";
    dialoge.appendChild(listNameLabel);
    const listNameInput = document.createElement("input");
    listNameInput.setAttribute('id', 'listName');
    listNameInput.setAttribute('type', 'text');
    dialoge.appendChild(listNameInput);


    const addListBtn = document.createElement("button");
    addListBtn.classList.add("addListBtn");
    addListBtn.textContent = "Create List";
    dialoge.appendChild(addListBtn);

    addListBtn.addEventListener("click", () => {
        let listNameEntered = listNameInput.value;
        createList(listNameEntered);
    }
    )
    listForm.appendChild(dialoge);
    header.appendChild(listForm);
    dialoge.showModal();
}

function createNewTask() {
    const taskForm = document.createElement("form");

    const dialoge = document.createElement("dialog");
    dialoge.classList.add("dialoge");

    const taskNameLabel = document.createElement("label");
    taskNameLabel.setAttribute('for', 'taskName');
    taskNameLabel.textContent = "Task Name";
    dialoge.appendChild(taskNameLabel);
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute('id', 'taskName');
    taskNameInput.setAttribute('name', 'taskName');
    taskNameInput.setAttribute('type', 'text');
    dialoge.appendChild(taskNameInput);

    const taskDescriptionLabel = document.createElement("label");
    taskDescriptionLabel.setAttribute('for', 'taskDescription');
    taskDescriptionLabel.textContent = "Task Description";
    dialoge.appendChild(taskDescriptionLabel);
    const taskDescriptionInput = document.createElement("input");
    taskDescriptionInput.setAttribute('id', 'taskDescription');
    taskDescriptionInput.setAttribute('type', 'text');
    taskDescriptionInput.setAttribute('name', 'taskDescription');
    dialoge.appendChild(taskDescriptionInput);

    const taskDateLabel = document.createElement("label");
    taskDateLabel.setAttribute('for', 'taskDate');
    taskDateLabel.textContent = "Task Date";
    dialoge.appendChild(taskDateLabel);
    const taskDateInput = document.createElement("input");
    taskDateInput.setAttribute('id', 'taskDate');
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('name', 'taskDate');
    dialoge.appendChild(taskDateInput);

    const priorityHeader = document.createElement("p");
    priorityHeader.textContent = "Select the priority:";
    dialoge.appendChild(priorityHeader);

    const priorityList = ["High", "Medium", "Low"];


    for (let p of priorityList) {
        const priorityLabel = document.createElement("label");
        priorityLabel.setAttribute('for', p);
        priorityLabel.textContent = p;
        dialoge.appendChild(priorityLabel);
        const priorityInput = document.createElement("input");
        priorityInput.setAttribute('id', p);
        priorityInput.setAttribute('type', 'radio');
        priorityInput.setAttribute('name', 'priority');
        priorityInput.setAttribute('value', p);
        dialoge.appendChild(priorityInput);
    }


    const addBtn = document.createElement("button");
    addBtn.classList.add("taskAddButton");
    addBtn.textContent = "Add";
    dialoge.appendChild(addBtn);

    addBtn.addEventListener("click", () => {
        var radioSelected = document.querySelector('input[name="priority"]:checked');
        var taskObj = createTask(taskNameInput.value, taskDescriptionInput.value, taskDateInput.value, radioSelected.value);

        dialoge.close();
    })

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("taskCloseButton");
    closeBtn.textContent = "Close";
    dialoge.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => dialoge.close());

    taskForm.appendChild(dialoge);
    header.appendChild(taskForm);
    dialoge.showModal();



}


export { createHeader }


// your create new task method should return something, so that value can be takedn to create list