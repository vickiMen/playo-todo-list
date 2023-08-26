class Controller {

    constructor() {
        this.tasks = [];
    }

    async getDataFromServer() {
        const tasks = await fetch('/loadTasks');
        this.tasks = await tasks.json();
    }

    // add new task to the tasks list in the server and to temporary storing 
    async addTask(inputValue) {
        const result = await fetch('/addTask', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ title: inputValue })
        });
        const newTask = await result.json();
        this.tasks.push(newTask);
        return;
    }

    // delete task from the server and to temporary storing 
    async deleteTask(taskId) {
        const result = await fetch(`/${taskId}`, {
            method: 'DELETE',
        });

        const taskToDelete = this.tasks.find(task => task.id == taskId);
        const taskIndex = this.tasks.indexOf(taskToDelete);
        this.tasks.splice(taskIndex, 1);
        await result.json();
        return;
    }

}

const controller = new Controller();