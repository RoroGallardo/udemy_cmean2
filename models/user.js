'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = Schema({
    name : String,
    surname : String,
    email : String,
    password : String,
    rol : String,
    image : String
});

module.exports = mongoose.model('User',userSchema);