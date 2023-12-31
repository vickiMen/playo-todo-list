const { tasks, initTasks } = require('./tasks');

const initialize = () => {
    initTasks();
}

const getAllTasks = () => {
    return [...tasks];
};

const createTask = (newTask) => {
    tasks.push(newTask);
    return 1;
};

const removeTask = (id) => {
    const taskToRemove = tasks.find(task => task.id == id);
    if (!taskToRemove) return null;
    const taskIndex = tasks.indexOf(taskToRemove);
    [...tasks.splice(taskIndex, 1)];
    return tasks;
};

module.exports = { initialize, getAllTasks, createTask, removeTask };