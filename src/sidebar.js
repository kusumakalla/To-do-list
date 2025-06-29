import { loadHomePage } from "./loadHomePage";


function createSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.textContent = "";

    const dashboardDiv = document.createElement("div");
    dashboardDiv.classList.add("iconDiv");
    dashboardDiv.classList.add("dashboardDiv");
    const SVG_NS = "http://www.w3.org/2000/svg";
    const dashboardImage = document.createElementNS(SVG_NS, "svg");
    dashboardImage.classList.add("icon");
    dashboardImage.setAttribute('xmlns', SVG_NS);
    dashboardImage.setAttribute('viewBox', "0 0 24 24");
    const dashboardPath = document.createElementNS(SVG_NS, "path");
    dashboardPath.setAttribute("d", "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z")
    dashboardImage.appendChild(dashboardPath);
    dashboardDiv.appendChild(dashboardImage);

    const dashboard = document.createElement("h2")
    dashboard.classList.add("dashboardName");
    dashboard.textContent = "Dashboard";
    dashboardDiv.appendChild(dashboard);
    sidebar.appendChild(dashboardDiv);


    const homeDiv = document.createElement("div");
    homeDiv.classList.add("iconDiv");
    const homeImage = document.createElementNS(SVG_NS, "svg");
    homeImage.classList.add("icon");
    homeImage.setAttribute('xmlns', SVG_NS);
    homeImage.setAttribute('viewBox', "0 0 24 24");
    const homePath = document.createElementNS(SVG_NS, "path");
    homePath.setAttribute('id', "homePath");
    homePath.setAttribute("d", "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z")
    homeImage.appendChild(homePath);
    homeDiv.appendChild(homeImage);

    const home = document.createElement("p");
    home.classList.add("sideIcons");
    home.textContent = "Home";
    homeDiv.appendChild(home);
    sidebar.appendChild(homeDiv);

    const tasksDiv = document.createElement("div");
    tasksDiv.classList.add("iconDiv");
    const tasksImage = document.createElementNS(SVG_NS, "svg");
    tasksImage.classList.add("icon");
    tasksImage.setAttribute('xmlns', SVG_NS);
    tasksImage.setAttribute('viewBox', "0 0 24 24");
    const tasksPath = document.createElementNS(SVG_NS, "path");
    tasksPath.setAttribute("d", "M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z");
    tasksImage.appendChild(tasksPath);
    tasksDiv.appendChild(tasksImage);


    const tasks = document.createElement("p");
    tasks.classList.add("sideIcons");
    tasks.textContent = "Tasks";
    tasksDiv.appendChild(tasks);
    sidebar.appendChild(tasksDiv);

    homeDiv.addEventListener("click", loadHomePage);


}

export { createSidebar };
