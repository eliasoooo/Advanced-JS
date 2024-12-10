const Category = require('./Category');

class CategoryService {
    async createCategory(data) {
        return await Category.create(data);
    }

    async getAllCategories() {
        return await Category.find();
    }

    async getCategoryById(id) {
        return await Category.findById(id);
    }

    async updateCategory(id, data) {
        return await Category.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteCategory(id) {
        return await Category.findByIdAndDelete(id);
    }
}

module.exports = new CategoryService();
