const express = require("express");

const routes = express.Router();
const mongoose = require("mongoose");
const LoginController = require("./controllers/LoginController");

/*routes.get('/teste',(req,res) => {
    return res.send('Hello World - testing again!');
})*/
// GET/PUT/DELETE/POST

routes.post("/login", LoginController.store);

module.exports = routes;

