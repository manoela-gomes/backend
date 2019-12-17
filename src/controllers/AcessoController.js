

const mongoose = require("mongoose");
const Login= require("../models/Login");


class AcessoController{

    async store(req,res){
        
        const acesso = await Login.findOne({login:req.login},{ login: 1, password: 1});
        return acesso;

        //req.io.sockets.in(login)
    }

}
