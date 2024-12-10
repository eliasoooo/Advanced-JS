const User = require('./User');

class UserService {
    async createUser(data) {
        return await User.create(data);
    }

    async getAllUsers() {
        return await User.find();
    }

    async getUserById(id) {
        return await User.findById(id);
    }

    async updateUser(id, data) {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserService();
