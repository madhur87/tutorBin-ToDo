const bcrypt = require('bcryptjs');
const user = require('../models/user');

module.exports = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        //Create a new user
        const userSave = new user({
            userName: req.body.userName,
            email: req.body.email,
            password: hashPassword,
            name: req.body.name
        });

        await userSave.save();
        res.status(201).json({ message: 'User SignUp Sucessfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};