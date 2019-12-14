

const mongoose = require("mongoose");
const Acesso = require("../models/Acesso");


class AcessoController{

    async store(req,res){
        var query = { login: this.req.login, password: this.req.password };
        const acesso = await Acesso.find(query).toArray(function(err, result) {
        return res.json(acesso);});

        //req.io.sockets.in(login)
    }

}

module.exports = new AcessoController();
