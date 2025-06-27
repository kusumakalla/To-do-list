let taskStorage = [];

function createTask(taskName, description, dueDate, priority) {
    const task = { taskName, description, dueDate, priority };
    addToStorage(task)
    console.log("added to tasks");
    console.log("tasks=", taskStorage);
    return task;
}

function addToStorage(task) {
    taskStorage.push(task);
}

export { createTask, taskStorage };