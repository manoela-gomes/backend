var express = require('express'),
    cors = require('cors'),
    app = express();

const routes = express.Router();
const mongoose = require("mongoose");
const LoginController = require("./controllers/LoginController");
const AcessoController = require("./controllers/AcessoController");

/*routes.get('/teste',(req,res) => {
    return res.send('Hello World - testing again!');
})*/
// GET/PUT/DELETE/POST

var corsOptions = {
    origin: '*'
};

routes.get("/");
routes.get("/logar", AcessoController.store);
routes.post("/login", LoginController.store);


module.exports = routes;

