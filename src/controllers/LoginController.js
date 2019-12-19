const Login = require("../models/Login");

class LoginController{

    async store(req,res){

        const login_create = await Login.create({login:req.body.login, password:req.body.password});
        return res.json(login_create);
        
        //req.io.sockets.in(login)
    }

}

module.exports = new LoginController();
