const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (user) => {
    try {
        const token = jwt.sign({
            email: user.email,
            _id: user._id,
            userName: user.userName
        }, process.env.Token_CRED, { expiresIn: '2h' });

        return token;
    } catch (err) {
        return err
    }
}