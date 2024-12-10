const Task = require('./Task');

class TaskService {
    async createTask(data) {
        return await Task.create(data);
    }

    async getAllTasks() {
        return await Task.find().populate('assignedTo', 'username email'); // Populate the `assignedTo` field with user details
    }

    async getTaskById(id) {
        return await Task.findById(id).populate('assignedTo', 'username email');
    }

    async updateTask(id, data) {
        return await Task.findByIdAndUpdate(id, data, { new: true }).populate('assignedTo', 'username email');
    }

    async deleteTask(id) {
        return await Task.findByIdAndDelete(id);
    }
}

module.exports = new TaskService();
