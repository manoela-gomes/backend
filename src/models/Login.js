const mongoose = require("mongoose");
const Login = new mongoose.Schema(
{    
login:{ 
    type:String,
},
password:{
    type:String,
},
},
{
 timestamps:true
});
module.exports = mongoose.model("Login",Login);

