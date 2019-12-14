const mongoose = require("mongoose");
const Acesso = new mongoose.Schema(
{    
login:{ 
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},
});
module.exports = mongoose.model("Acesso",Acesso);

