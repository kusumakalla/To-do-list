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
            mainContent.appendChild(listDiv);
            // add functionality to show task names may be
        }
    }
}

export { showDashBoard };