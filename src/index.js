import "./styles.css"
import { createTask, taskStorage } from "./task";
import { createList, listStorage } from "./list";
import { loadHomePage } from "./loadHomePage";

// console.log(taskStorage);
// console.log(listStorage);


// let task1 = createTask("Groceries", "Buy groceries from EasyBazar", "12-03-2025", "High");
// let task2 = createTask("Groceries1", "Buy groceries from EasyBazar111", "12-03-2025", "Low");
// let task3 = createTask("sunscreen", "Buy sunscreen from Nykaa", "12-07-2025", "Medium");
// console.log(createList("Personal", task1, task2));
// console.log(createList("Skincare", task3));

loadHomePage();
