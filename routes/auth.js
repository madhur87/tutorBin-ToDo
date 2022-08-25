const routes = require('express').Router();
const signIn = require('../controllers/signIn');
const { signInValidation } = require('../middleware/userValidation');
//const signUp = require('../controllers/signUp');
const verifyJWT = require('../middleware/jwtVerify');

routes.post('/signIn', verifyJWT, signInValidation, signIn);
//routes.post('/signIn',signUp);

module.exports = routes;