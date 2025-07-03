import { createTask } from "./task";
import { createList, listStorage } from "./list";
import { showDashBoard } from "./dashboard";

let header = document.querySelector("header");
function createHeader() {

    header.textContent = "";
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");

    const headerDivText = document.createElement("h1");
    headerDivText.textContent = "Mission Possible";

    headerDiv.appendChild(headerDivText);
    header.appendChild(headerDiv);

    const navListDiv = document.createElement("div");
    navListDiv.classList.add("navListDiv");

    const newListButton = document.createElement("button");
    newListButton.classList.add("newListButton");
    newListButton.textContent = "New List";
    newListButton.addEventListener("click", (event) => {
        event.preventDefault();
        createNewList();
    });

    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("newTaskButton");
    newTaskButton.textContent = "New Task";
    newTaskButton.addEventListener("click", createNewTask);




    navListDiv.appendChild(newListButton);
    navListDiv.appendChild(newTaskButton);
    header.appendChild(navListDiv);
}

function createNewList() {


    const dialoge = document.createElement("dialog");

    const listNameLabel = document.createElement("label");
    listNameLabel.setAttribute('for', 'listName');
    listNameLabel.textContent = "List Name : ";
    dialoge.appendChild(listNameLabel);
    const listNameInput = document.createElement("input");
    listNameInput.setAttribute('id', 'listName');
    listNameInput.setAttribute('type', 'text');
    dialoge.appendChild(listNameInput);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("taskButtons");

    const addListBtn = document.createElement("button");
    addListBtn.classList.add("addListBtn");
    addListBtn.setAttribute("type", "button");
    addListBtn.textContent = "Create List";
    buttonDiv.appendChild(addListBtn);

    const closebtn = document.createElement("button");
    addListBtn.setAttribute("type", "button");
    closebtn.textContent = "Close";
    buttonDiv.appendChild(closebtn);




    dialoge.appendChild(buttonDiv);

    addListBtn.addEventListener("click", () => {
        let listNameEntered = listNameInput.value.trim();
        createList(listNameEntered);
        dialoge.close();
        showDashBoard();

    }
    )

    closebtn.addEventListener("click", () => {
        dialoge.close();
        // showDashBoard();
    });


    header.appendChild(dialoge);
    dialoge.showModal();
}

function createNewTask() {


    const dialoge = document.createElement("dialog");
    dialoge.classList.add("dialoge");

    const taskNameDiv = document.createElement("div");
    taskNameDiv.classList.add("dialogueDiv");
    const taskNameLabel = document.createElement("label");
    taskNameLabel.setAttribute('for', 'taskName');
    taskNameLabel.textContent = "Task Name: ";
    taskNameDiv.appendChild(taskNameLabel);
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute('id', 'taskName');
    taskNameInput.setAttribute('name', 'taskName');
    taskNameInput.setAttribute('type', 'text');
    taskNameDiv.appendChild(taskNameInput);
    dialoge.appendChild(taskNameDiv);


    const taskDesDiv = document.createElement("div");
    taskDesDiv.classList.add("dialogueDiv");
    const taskDescriptionLabel = document.createElement("label");
    taskDescriptionLabel.setAttribute('for', 'taskDescription');
    taskDescriptionLabel.textContent = "Task Description: ";
    taskDesDiv.appendChild(taskDescriptionLabel);
    const taskDescriptionInput = document.createElement("textarea");
    taskDescriptionInput.setAttribute('id', 'taskDescription');
    taskDescriptionInput.setAttribute('rows', '3');
    taskDescriptionInput.setAttribute('columns', '60');
    taskDesDiv.appendChild(taskDescriptionInput);
    dialoge.appendChild(taskDesDiv);


    const taskDateDiv = document.createElement("div");
    taskDateDiv.classList.add("dialogueDiv");
    const taskDateLabel = document.createElement("label");
    taskDateLabel.setAttribute('for', 'taskDate');
    taskDateLabel.textContent = "Task End Date: ";
    taskDateDiv.appendChild(taskDateLabel);
    const taskDateInput = document.createElement("input");
    taskDateInput.setAttribute('id', 'taskDate');
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('name', 'taskDate');
    taskDateDiv.appendChild(taskDateInput);
    dialoge.appendChild(taskDateDiv);

    const priorityHeader = document.createElement("p");
    priorityHeader.textContent = "Select priority: ";
    dialoge.appendChild(priorityHeader);
    priorityHeader.style.fontWeight = "600";

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

    const selectMenuDiv = document.createElement("div");
    const selectMenulabel = document.createElement("label");
    selectMenulabel.setAttribute("for", "selectMenu");
    selectMenulabel.textContent = "Select the list (defaults to list being shown if not selected): ";
    selectMenuDiv.appendChild(selectMenulabel);
    const selectMenu = document.createElement("select");
    selectMenu.setAttribute("id", "selectMenu");

    listStorage.forEach(list => {
        const option = document.createElement("option");
        option.textContent = list.listName;
        option.value = list.listName;
        selectMenu.appendChild(option);
    })
    selectMenuDiv.appendChild(selectMenu);

    dialoge.appendChild(selectMenuDiv);


    const taskButtons = document.createElement("div")
    taskButtons.classList.add("taskButtons");

    const addBtn = document.createElement("button");
    addBtn.classList.add("taskAddButton");
    addBtn.textContent = "Add";
    taskButtons.appendChild(addBtn);

    addBtn.addEventListener("click", () => {
        var radioSelected = document.querySelector('input[name="priority"]:checked');
        var taskObj = createTask(taskNameInput.value, taskDescriptionInput.value, taskDateInput.value, radioSelected.value);
        const selectList = selectMenu.value;

        let index = listStorage.findIndex((i) => i.listName === selectList);
        listStorage[index].tasks.push(taskObj);
        showDashBoard();

        dialoge.close();
    })

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("taskCloseButton");
    closeBtn.textContent = "Close";
    taskButtons.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => dialoge.close());

    dialoge.appendChild(taskButtons);
    header.appendChild(dialoge);
    dialoge.showModal();



}


export { createHeader }


