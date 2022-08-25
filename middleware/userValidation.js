const Joi = require('joi');

const signUpValidation = async (req, res, next) => {
    try {

        const userSignUpPayload = Joi.object({
            userName: Joi.string().min(5).required().label('UserName is too short'),
            name: Joi.string().required(),
            email: Joi.string().min(6).required().email().label('Email is invalid'),
            password: Joi.string().min(5).required().label('Password too short')
        });

        await userSignUpPayload.validateAsync(req.body)
        next();
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const signInValidation = async(req, res, next) => {
    try {
        const userSignInPayload = Joi.object({
            email: Joi.string().min(6).required().email().label('Email is invalid'),
            password: Joi.string().min(5).required().label('Password too short')
        });
        await userSignInPayload.validateAsync(req.body);
        next()
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {
    signInValidation,
    signUpValidation
}