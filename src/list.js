
// let listStorage = JSON.parse(localStorage.getItem("listStorage")) || [];


function createList(listName, ...args) {
    let list = { listName, tasks: args };
    list.id = crypto.randomUUID();
    addToStorage(list);
    console.log("added to list");
    return list;
}

function addToStorage(list) {
    let listStorage = JSON.parse(localStorage.getItem("listStorage")) || [];
    if (listStorage.findIndex((i) => i.listName === list.listName) === -1) {
        listStorage.push(list);
        localStorage.setItem("listStorage", JSON.stringify(listStorage));
    }
}

// createList("Untitled");

export { createList };