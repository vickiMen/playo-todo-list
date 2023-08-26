const express = require('express');
const router = express.Router();
const Task = require('../model/Task');
const { initialize, getAllTasks, createTask, removeTask } = require('../data/manager');
const ERROR_MESSAGE = 'Something went wrong. Please try again.';

// run only once, when the server is starting
(function () {
    initialize()
})();

// load all current tasks
router.get('/loadTasks', function (req, res) {
    const result = getAllTasks();
    if (!result) return res.status.send(ERROR_MESSAGE);
    return res.send(result);
})

// adding a new task to the data storage
router.post('/addTask', function (req, res) {
    const { title } = req.body;
    const newTask = new Task(title);
    createTask(newTask);

    // if (!taskId) return res.status.send(ERROR_MESSAGE);
    return res.send(newTask);
});

router.delete('/:id', function (req, res) {
    const { id } = req.params;
    const result = removeTask(id);
    if (!result) return res.status(404).send(ERROR_MESSAGE);
    return res.send(result);
})

module.exports = router;