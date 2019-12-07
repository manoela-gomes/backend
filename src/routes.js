const express = require("express");
const cors = require('cors');
const routes = express.Router();
const mongoose = require("mongoose");
const LoginController = require("./controllers/LoginController");

/*routes.get('/teste',(req,res) => {
    return res.send('Hello World - testing again!');
})*/
// GET/PUT/DELETE/POST

Tente adicionar em seu servidor node.js o módulo cors. E tente adicioná-lo desta forma:

var express = require('express'),
    cors = require('cors'),
    app = express();

app.use(cors());

routes.post("/login", LoginController.store);

module.exports = routes;

