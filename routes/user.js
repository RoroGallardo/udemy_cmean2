'use strict'
var express = require('express'),
    userController = require('../controllers/user'),
    api = express.Router();

api.get('/testUserController',userController.test);
api.post('/register',userController.saveUser);


module.exports = api; 