const routes = require('express').Router();
const signIn = require('../controllers/signIn');
const { signInValidation, signUpValidation } = require('../middleware/userValidation');
const signUp = require('../controllers/signUp');

routes.post('/signIn', signInValidation, signIn);
routes.post('/signUp', signUpValidation, signUp);

module.exports = routes;