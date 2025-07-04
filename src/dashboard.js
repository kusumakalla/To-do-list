
import { showList } from "./showList";

let mainContent = document.querySelector(".mainContent");


function showDashBoard() {
    mainContent.textContent = "";
    let dashboardHeader = document.createElement("h2");
    dashboardHeader.classList.add("dashboardHeader");
    dashboardHeader.textContent = "My Lists"
    mainContent.appendChild(dashboardHeader);

    const listsContainer = document.createElement("div");
    listsContainer.classList.add("listsContainer");
    let locaListStorage = JSON.parse(localStorage.getItem("listStorage")) || [];
    if (!locaListStorage || locaListStorage.length == 0)
        mainContent.textContent = "No created lists to show. Create one to get started";
    else {
        for (let list of locaListStorage) {
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
            const svgDiv = document.createElement("div");
            svgDiv.classList.add("svgDiv");

            const SVG_NS = "http://www.w3.org/2000/svg";
            const editImage = document.createElementNS(SVG_NS, "svg");
            editImage.classList.add("icon");
            editImage.setAttribute('xmlns', SVG_NS);
            editImage.setAttribute('viewBox', "0 0 24 24");
            editImage.setAttribute('id', list.id);
            const editpath = document.createElementNS(SVG_NS, "path");
            editpath.setAttribute("d", "M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z")
            editImage.appendChild(editpath);
            svgDiv.appendChild(editImage);

            editImage.addEventListener("click", () => {
                showList(editImage.id);
                console.log("edit call made");
            })

            const deleteImage = document.createElementNS(SVG_NS, "svg");
            deleteImage.classList.add("icon");
            deleteImage.setAttribute('xmlns', SVG_NS);
            deleteImage.setAttribute('viewBox', "0 0 24 24");
            const deletepath = document.createElementNS(SVG_NS, "path");
            deletepath.setAttribute("d", "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z")
            deleteImage.appendChild(deletepath);
            deleteImage.setAttribute("id", list.id);
            svgDiv.appendChild(deleteImage);

            listDiv.appendChild(svgDiv);
            listsContainer.appendChild(listDiv);

            deleteImage.addEventListener("click", () => {
                locaListStorage.splice(locaListStorage.findIndex((i) => i.id === deleteImage.id), 1);
                localStorage.setItem("listStorage", JSON.stringify(locaListStorage));
                showDashBoard();
            })
        }
    }
    mainContent.appendChild(listsContainer);


}

export { showDashBoard };