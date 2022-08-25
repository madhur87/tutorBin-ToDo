const Task = require('../models/task');

module.exports = async (req, res) => {
    try {
        const userObj = req.user;
        if (userObj) {
            const saveTask = new Task({
                description: req.body.description,
                _userId: userObj._id
            });
            const userDb = await saveTask.save();
            res.status(201).json({ message: 'Add Task Sucessfully', data: {description: userDb.description, completed: userDb.completed} });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}