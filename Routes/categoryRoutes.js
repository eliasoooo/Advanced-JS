const express = require('express');
const router = express.Router();
const CategoryService = require('../domain/Category/CategoryService');

// Create a new category
router.post('/', async (req, res) => {
    try {
        const category = await CategoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await CategoryService.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await CategoryService.getCategoryById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found.' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
    try {
        const category = await CategoryService.updateCategory(req.params.id, req.body);
        if (!category) {
            return res.status(404).json({ error: 'Category not found.' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
    try {
        const category = await CategoryService.deleteCategory(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found.' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
