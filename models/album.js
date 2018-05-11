'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var albumSchema = Schema({
    title : String,
    description : String,
    year : String,
    image : String,
    artist:{type: Schema.ObjectId, ref : 'Artist'}    
});

module.exports = mongoose.model('Album',albumSchema);