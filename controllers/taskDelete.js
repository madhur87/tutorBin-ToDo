const Task = require('../models/task');

module.exports = async (req, res) => {
    try {
        const userObj = req.user;
        if (userObj) {
            await Task.findOneAndDelete({ _id: req.params.id, _userId: userObj._id });
            res.status(200).json({ message: 'Task Delete Successfully' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}