const bcrypt = require('bcryptjs');
const user = require('../models/user');
const jwtTokenCreate = require('../helpers/jwtCreate');

module.exports = async (req, res) => {
    try {
        const userObj = await user.findOne({
            email: req.body.email
        });

        if (userObj) {

            //Compare Password
            const isPasswordCorrect = await bcrypt.compare(req.body.password, userObj.password);

            if (isPasswordCorrect) {
                const token = await jwtTokenCreate(userObj);
                //Generate JWT Token
                res.status(200).json({ token });
            } else {
                res.status(400).json([
                    { message: 'Password is Invalid', path: ['password'], context: { label: 'Password is Invalid' } }
                ]);
            }
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};