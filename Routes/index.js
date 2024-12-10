const express = require('express');
const router = express.Router();

// Import individual domain routes
const categoryRoutes = require('./categoryRoutes');
const taskRoutes = require('./taskRoutes');
const userRoutes = require('./userRoutes');

// Mount routes to respective paths
router.use('/categories', categoryRoutes);
router.use('/tasks', taskRoutes);
router.use('/users', userRoutes);

module.exports = router;
