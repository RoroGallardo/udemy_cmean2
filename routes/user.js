'use strict'
var express = require('express'),
    userController = require('../controllers/user'),
    api = express.Router();

api.get('/testUserController',userController.test);
api.post('/register',userController.saveUser);
api.post('/loginUser',userController.loginUser);


module.exports = api; 