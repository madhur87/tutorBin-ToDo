const Task = require('../models/task');

module.exports = async (req, res) => {
    try {
        const userObj = req.user;
        const taskPayload = req.body;
        if (userObj) {
            const updateTask = await Task.findOneAndUpdate({ _id: req.params.id, _userId: userObj._id }, taskPayload, { new: true, projection: { description: 1, completed: 1 } });
            res.status(200).json({ message: 'Task Update Successfully', data: updateTask });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}