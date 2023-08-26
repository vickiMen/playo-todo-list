class Renderer {

    constructor() {
        this.inputElement = document.getElementsByTagName('input')[0];;
        this.tasksListElement = document.getElementsByClassName('tasks-list')[0];;
    };

    renderData(allTasks) {
        this._clearTasksList; // empty the list first
        // show all tasks from the server
    };
};

const renderer = new Renderer();