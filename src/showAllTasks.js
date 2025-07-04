
import { listStorage } from "./list";

let mainContent = document.querySelector(".mainContent");

function showAllTasks() {
    mainContent.textContent = "";
    const taskListDiv = document.createElement("div");
    taskListDiv.classList.add("taskListDiv");
    let locaListStorage = JSON.parse(localStorage.getItem("listStorage")) || [];
    for (let list of locaListStorage) {
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
                taskdiv.setAttribute("id", "highprior")
            else if (task.priority === 'Medium')
                taskdiv.setAttribute("id", "medprior");

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

            const buttonDiv = document.createElement("div");


            const SVG_NS = "http://www.w3.org/2000/svg";
            const deleteImage = document.createElementNS(SVG_NS, "svg");
            deleteImage.classList.add("icon");
            deleteImage.setAttribute('xmlns', SVG_NS);
            deleteImage.setAttribute('viewBox', "0 0 24 24");
            const deletepath = document.createElementNS(SVG_NS, "path");
            deletepath.setAttribute("d", "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z")
            deleteImage.appendChild(deletepath);
            deleteImage.setAttribute("id", list.id + task.id);
            buttonDiv.appendChild(deleteImage);

            deleteImage.addEventListener("click", () => {
                const listId = deleteImage.id.slice(0, 36);
                const listIndex = locaListStorage.findIndex((i) => i.id === listId);
                const tasksArray = locaListStorage[listIndex].tasks;
                const taskId = deleteImage.id.slice(-36);
                const taskIndex = tasksArray.findIndex((i) => i.id === taskId);
                locaListStorage[listIndex].tasks.splice(taskIndex, 1);
                localStorage.setItem("listStorage", JSON.stringify(locaListStorage));
                console.log(deleteImage.id);
                showAllTasks();
            })

            taskdiv.appendChild(statusDiv);
            taskdiv.appendChild(buttonDiv);
            taskListDiv.appendChild(taskdiv)
        }
    }
    mainContent.appendChild(taskListDiv);
}

export { showAllTasks };