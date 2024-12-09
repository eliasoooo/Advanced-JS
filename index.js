const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory storage
let users = [];
let nextId = 1;

// Routes

// Create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    const user = { id: nextId++, name, email };
    users.push(user);
    res.status(201).json(user);
});

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found.' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
