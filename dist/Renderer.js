class Renderer {

    constructor() {
        this.inputElement = document.getElementsByTagName('input')[0];;
        this.tasksListElement = document.getElementsByClassName('tasks-list')[0];;
    };

    renderData(tasks) {
        this.tasksListElement.innerHTML = ''; //empty the list first
        tasks.forEach(task => {
            this.addTask(task)
        });
    };

    addTask(task) {
        const newTaskElement = this._createTaskElement(task);
        this.tasksListElement.appendChild(newTaskElement);
        this.inputElement.value = ''; // clear the input value
    }

    _createTaskElement(task) {
        const element = document.createElement('div');
        element.className = 'task';
        element.id = task.id;
        const taskTitle = this._createTaskTitle(task.title);
        const taskDeleteButton = this._createTaskDeleteButton(task.id);
        element.append(taskTitle, taskDeleteButton);
        return element;
    };

    _createTaskTitle(value) {
        const element = document.createElement('div');
        element.className = 'task-title';
        element.innerHTML = value;
        return element;
    }

    _createTaskDeleteButton(id) {
        const element = document.createElement('button');
        element.className = 'task-delete';
        element.id = id;
        element.innerHTML = 'X';
        element.onclick = deleteTask;
        return element;
    }

};

const renderer = new Renderer();