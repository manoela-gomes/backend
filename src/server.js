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

io.on("connection", socket => {
    socket.on('connectRoom', acesso => { 
        socket.join(acesso);
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

const host = '0.0.0.0';
const port = process.env.PORT || 3333
server.listen(port,host);