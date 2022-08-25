const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const taskCreateValidation = async (req, res, next) => {
    try {

        const taskCreatePayload = Joi.object({
            description: Joi.string().required()
        });

        await taskCreatePayload.validateAsync(req.body)
        next();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const taskUpdateValidation = async (req, res, next) => {
    try {
        const taskUpdatePayload = Joi.object({
            description: Joi.string().required(),
            completed: Joi.boolean().required()
        });

        const taskUpdateParams = Joi.objectId().required()

        await taskUpdatePayload.validateAsync(req.body);
        await taskUpdateParams.validateAsync(req.params.id)
        next()
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const taskDeleteValidation = async (req, res, next) => {
    try {

        const taskDeleteParams = Joi.objectId().required()

        await taskDeleteParams.validateAsync(req.params.id)
        next();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    taskCreateValidation,
    taskUpdateValidation,
    taskDeleteValidation
}