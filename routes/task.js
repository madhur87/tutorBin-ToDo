const routes = require('express').Router();
const { taskUpdateValidation, taskCreateValidation, taskDeleteValidation } = require('../middleware/taskValidation');
const createTask = require('../controllers/taskCreate');
const getTask = require('../controllers/tastGet');
const deleteTask = require('../controllers/taskDelete');
const updateTask = require('../controllers/taskUpdate');
const verifyToken = require('../middleware/jwtVerify');


routes.get('/task', verifyToken, getTask);
routes.post('/task', verifyToken, taskCreateValidation, createTask);
routes.put('/task/:id',verifyToken, taskUpdateValidation, updateTask);
routes.delete('/task/:id', verifyToken, taskDeleteValidation, deleteTask);

module.exports = routes;