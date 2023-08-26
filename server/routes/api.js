const express = require('express');
const router = express.Router();
const Task = require('../model/Task');

router.get('/loadTasks', function (req, res) {
    // load all current tasks
})

router.post('/addTask', function (req, res) {
    // add a new task to the data storage
});

router.delete('/:id', function (req, res) {
    // delete task give its id
})

module.exports = router;