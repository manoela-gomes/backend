

const mongoose = require("mongoose");
const Login= require("../models/Login");


class AcessoController{

    async store(req,res){
        var query = { login: this.req.login, password: this.req.password };
        const acesso = await Login.find(query).toArray(function(err, result) {
        return res.json(acesso);});

        //req.io.sockets.in(login)
    }

}

module.exports = new AcessoController();
