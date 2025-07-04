let taskStorage = JSON.parse(localStorage.getItem("taskStorage")) || []


function createTask(taskName, description, dueDate, priority, status) {
    const task = { taskName, description, dueDate, priority, status };
    task.status = false;
    task.id = crypto.randomUUID();
    addToStorage(task)
    console.log("added to tasks");
    console.log("tasks=", taskStorage);
    return task;
}

function addToStorage(task) {
    taskStorage.push(task);
    localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
}

export { createTask, taskStorage };