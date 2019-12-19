var express = require('express'),
    cors = require('cors'),
    app = express();

const routes = express.Router();
const mongoose = require("mongoose");
const LoginController = require("./controllers/LoginController");

/*routes.get('/teste',(req,res) => {
    return res.send('Hello World - testing again!');
})*/
// GET/PUT/DELETE/POST

var corsOptions = {
    origin: '*'
};

routes.post("/login", LoginController.store);
routes.get("/logar", AcessoController.store);

module.exports = routes;

