var submitButtonEl = $('#submit-button');
var projectItem = $('#project-input');
var listContainer = $('#list-container');

for (var i=0; i<storageArray.length; i++) {

    listContainer.append($('<div>'));
    listContainer.children[i].text(localStorage.getItem("task-array"[i]));
}

var storageArray = [];

submitButtonEl.on('click', function() {

    createTable();
})

function createTable() {

    // pushes the input value into empty storage array
    storageArray.push(projectItem.val());
    listItemEl.text(projectItem.val());
    // sets storage array into local storage
    localStorage.setItem("task-array", storageArray);
    listContainer.append(listItemEl);
}