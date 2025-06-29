import { createHeader } from "./header";
import { createSidebar } from "./sidebar";
import { showDashBoard } from "./dashboard";

function loadHomePage() {
    createHeader();
    createSidebar();
    showDashBoard();
}

export { loadHomePage };