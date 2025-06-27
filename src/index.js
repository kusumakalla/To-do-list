import { createTask, taskStorage } from "./task";
import { createList } from "./list";
import { showDashBoard } from "./dashboard";
import { createHeader } from "./header";

console.log(taskStorage);

let task1 = createTask("Groceries", "Buy groceries from EasyBazar", "12-03-2025", 3);
console.log(createList("Personal", [task1]));

createHeader();
showDashBoard();
