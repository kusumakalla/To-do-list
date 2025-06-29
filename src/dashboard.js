import { listStorage } from "./list";

let mainContent = document.querySelector(".mainContent");


function showDashBoard() {
    mainContent.textContent = "";
    let dashboardHeader = document.createElement("h2");
    dashboardHeader.classList.add("dashboardHeader");
    dashboardHeader.textContent = "My Lists"
    mainContent.appendChild(dashboardHeader);
    if (listStorage.length == 0)
        mainContent.textContent = "No created lists to show. Create one to get started";
    else {
        for (let list of listStorage) {
            let tittle = list.listName;
            let listDiv = document.createElement("div");
            listDiv.classList.add("listDiv");
            let listTitle = document.createElement("h3")
            listTitle.classList.add("listTitle");
            listTitle.textContent = tittle;
            listDiv.appendChild(listTitle);

            for (let task of list.tasks) {
                let taskDiv = document.createElement("div");
                taskDiv.classList.add("taskDiv");
                let taskTitle = document.createElement("h4")
                taskTitle.classList.add("taskTitle");
                taskTitle.textContent = task.taskName;

                let taskDate = document.createElement("span");
                taskDate.classList.add("taskDate");
                taskDate.textContent = task.dueDate;


                taskDiv.appendChild(taskTitle);
                taskDiv.appendChild(taskDate);
                listDiv.appendChild(taskDiv);
            }


            mainContent.appendChild(listDiv);
        }
    }
}

export { showDashBoard };