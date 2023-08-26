const express = require('express');
const router = express.Router();
const Task = require('../model/Task');
const { getAllTasks, createTask, removeTask } = require('../data/manager');

// load all current tasks
router.get('/loadTasks', function (req, res) {
    const result = getAllTasks();
    console.log(result)
    if (!result) return res.status.send('error'); // write an ERROR_MESSAGE
    return res.send(result);
})

// adding a new task to the data storage
router.post('/addTask', function (req, res) {
    const { title } = req.body;
    let initialId;
    
    const currentTasks = getAllTasks();
    if (currentTasks.length) initialId = currentTasks[currentTasks.length - 1].id + 1;
    
    const newTask = new Task(title, initialId);
    createTask(newTask);
    
    // if (!taskId) return res.status.send('error');
    return res.send(newTask);
});

router.delete('/:id', function (req, res) {
    const { id } = req.params;
    const result = removeTask(id);
    if (!result) return res.status(404).send('error'); // write an ERROR_MESSAGE
    return res.send(result);
})

module.exports = router;