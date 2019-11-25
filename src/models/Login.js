const mongoose = require("mongoose");
const Login = new mongoose.Schema(
{    
login:{ 
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},
},
{
 timestamps:true
});
module.exports = mongoose.model("Login",Login);

