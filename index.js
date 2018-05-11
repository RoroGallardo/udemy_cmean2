'use strict'

var mongoose = require('mongoose'),
    app = require('./app')    ;
var port = process.env.PORT || 3977;

//mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/curso_mean2',(err,res) =>{
    if(err){
        throw err;
        console.log(err)
    }else{
        console.log("Connected to MongoDB")
        app.listen(port, () =>{
            console.log(`MUSIFY Server is Started on port ${port}`);
        })
    }
});