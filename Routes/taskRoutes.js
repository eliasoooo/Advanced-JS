const express = require('express');
const router = express.Router();
const TaskService = require('../domain/Task/TaskService');

// Create a new task
router.post('/', async (req, res) => {
    try {
        const task = await TaskService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a task by ID
router.get('/:id', async (req, res) => {
    try {
        const task = await TaskService.getTaskById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found.' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
    try {
        const task = await TaskService.updateTask(req.params.id, req.body);
        if (!task) {
            return res.status(404).json({ error: 'Task not found.' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
    try {
        const task = await TaskService.deleteTask(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found.' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
