

const mongoose = require("mongoose");
const Acesso = require("../models/Acesso");

class AcessoController{

    async store(req,res){
        
        const acesso = await Acesso.findOne();
        return res.json(acesso);

        //req.io.sockets.in(login)
    }

}

module.exports = new LoginController();
