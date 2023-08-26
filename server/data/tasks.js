const Task = require('../model/Task');

const tasks = [];

const dummyData = [
    "yoga",
    "gym",
];

const initTasks = () => {
    dummyData.forEach(title => {
        tasks.push(new Task(title))
    });
    return tasks;
}

module.exports = { initTasks, tasks };