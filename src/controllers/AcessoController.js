const mongoose = require("mongoose");
const Login = require("../models/Login");

class AcessoController{

    async store(req,res){

        const logar = await Login.findOne({login:req.body.login});
        return res.json(logar.password === req.body.password);

        //req.io.sockets.in(login)
    }

}

module.exports = new AcessoController();
