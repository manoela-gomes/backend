const Login= require("../models/Login");


class AcessoController{

    async store(req,res){
        
        const acesso = await Login.findOne({login:req.params.login},{ login: 1, password: 1});
        return res.json(acesso);
        //req.io.sockets.in(login)
    }

}
