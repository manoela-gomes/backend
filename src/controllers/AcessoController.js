

const mongoose = require("mongoose");
const Login= require("../models/Login");


class AcessoController{

    async store(req,res){
        
        const acesso = await Login.findOne({login:req.login},{_id: 1, login: 1, password: 1});
        return res.json(acesso);

        //req.io.sockets.in(login)
    }

}

module.exports = new AcessoController();
db.bios.findOne(
    { contribs: 'OOP' },
    { _id: 0, 'name.first': 0, birth: 0 }
 )