const jwt = require('jsonwebtoken');
const user = require('../models/user');

const verifyJWT = async (req, res, next) => {
    try {
        let authorization = req.headers.authorization;

        if (authorization) {
            authorization = authorization.replace("Bearer", "");

            //Decode JWT to get Information
            const body = await jwt.verify(authorization, process.env.Token_CRED);
            const { _id } = body
            const query = {
                _id
            }

            const verifyUser = await user.findById(query);

            req.user = verifyUser;
            next();
        }else{
            res.status(400).json({
                message: "Authorization is Required"
            })
        }
    } catch (err) {
        res.status(401).json({
            message: err.message
        })
    }
};

module.exports = verifyJWT;