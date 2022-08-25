const Task = require('../models/task');

module.exports = async (req, res) => {
    try {
        const userObj = req.user;
        if (userObj) {
            const getTask = await Task.find({ _userId: userObj._id }, { description: 1, completed: 1 });
            res.status(200).json({ message: 'Task List', data: getTask });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}