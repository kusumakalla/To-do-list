
let listStorage = [];

function createList(listName, ...args) {
    let list = { listName, tasks: args };
    list.id = crypto.randomUUID();
    addToStorage(list);
    console.log("added to list");
    console.log("lists =", listStorage);
    return list;
}

function addToStorage(list) {
    listStorage.push(list);
}

export { listStorage, createList };