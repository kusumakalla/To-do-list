import "./styles.css"
import { createTask, taskStorage } from "./task";
import { createList } from "./list";
import { loadHomePage } from "./loadHomePage";

console.log(taskStorage);

let task1 = createTask("Groceries", "Buy groceries from EasyBazar", "12-03-2025", 3);
let task2 = createTask("Groceries1", "Buy groceries from EasyBazar111", "12-03-2025", 2);
console.log(createList("Personal", task1, task2));

loadHomePage();
