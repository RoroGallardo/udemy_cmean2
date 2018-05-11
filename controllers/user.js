'use strict'

var bcrypt = require('bcrypt-nodejs'),
    User = require('../models/user');

function test(req, res) {
    res.status(200).send({
        message : 'Testing app performace|Testing app performace|Testing app performace|Testing app performace|'
    })
    
}
function saveUser(req,res){
    var user = new User();


    var params = req.body;

    console.log(params);
    
    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';
    if(params.password){
        bcrypt.hash(params.password,null,null,function(err,hash) {
            user.password = hash;
            if(user.name != null && user.surname != null && user.email != null){
                console,log("ueweaqliao");
                user.save((err,userStored)=>{
                    if(err){
                        res.status(500).send({message : 'Error al guardar el usuario'});
                    }else{
                        if(!userStored){
                            res.status(404).send({message : 'No se ha registrado el usuario.'});
                        }else{
                            res.status(200).send({user:userStored});
                        }
                    }
                });
            }else{
                res.status(200).send({message : 'Introduce todos los datos'});
            }            
        });
    
    }else{
        res.status(200).send({message : 'Introduce la contraseña'});
    }

}

module.exports = {
    test,
    saveUser
};