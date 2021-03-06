const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require("cors");

app.use(cors());

io.on("connection", socket => {
socket.on('connectRoom', login => { 
    socket.join(login);
    })
});

mongoose.connect("mongodb+srv://app-manu:himalaia@cluster0-tzgfq.mongodb.net/test?retryWrites=true&w=majority",
{   useUnifiedTopology: true,
    useNewUrlParser:true
});


app.use((req,res,next) => { 
    req.io = io;
    return next();
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require('./routes'));

server.listen(process.env.PORT || 3333);