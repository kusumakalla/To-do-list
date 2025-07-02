import { listStorage } from "./list";

let mainContent = document.querySelector(".mainContent");
function showList(listID) {

    for (let i of listStorage) {
        if (i.id === listID) {
            displayTasks(i);
        }
    }
}

function displayTasks(list) {
    mainContent.textContent = "";
    const taskList = document.createElement("div");
    taskList.classList.add("taskList");
    const listHeader = document.createElement("h2");
    listHeader.textContent = list.listName;
    taskList.appendChild(listHeader);
    for (let task of list.tasks) {
        const taskdiv = document.createElement("div");
        taskdiv.classList.add("displayTask")

        const taskHeader = document.createElement("h3");
        taskHeader.textContent = task.taskName;
        taskdiv.appendChild(taskHeader)

        const taskDes = document.createElement("p");
        taskDes.textContent = task.description;
        taskdiv.appendChild(taskDes);

        const taskDue = document.createElement("p");
        taskDue.textContent = `Due Date : ${task.dueDate}`;
        taskdiv.appendChild(taskDue);

        const taskpriority = document.createElement("p");
        taskpriority.textContent = `Priority : ${task.priority}`;

        if (task.priority === 'High')
            taskdiv.classList.add("highprior");
        else if (task.priority === 'Medium')
            taskdiv.classList.add("medprior");
        else
            taskdiv.classList.add("lowprioir");

        taskdiv.appendChild(taskpriority);

        const statusDiv = document.createElement("div");
        const statusLabel = document.createElement("label");
        statusLabel.setAttribute('for', 'statusChecklist');
        statusLabel.textContent = "Completed";
        const statusInput = document.createElement("input");
        statusInput.setAttribute("id", 'statusChecklist');
        statusInput.setAttribute('type', "checkbox");

        statusInput.checked = task.status;
        statusDiv.appendChild(statusInput);
        statusDiv.appendChild(statusLabel);

        statusInput.addEventListener('change', () => {
            task.status = statusInput.checked;
            console.log(`statu changed to ${task.status}`);
        })

        taskdiv.appendChild(statusDiv);
        taskList.appendChild(taskdiv);
    }
    mainContent.appendChild(taskList);

}

export { showList };
// 