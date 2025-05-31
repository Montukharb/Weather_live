const {express,app,} = require('../server/mainServer.js');
const mongoose = require('mongoose');
function mongooseConnect(url){
    mongoose.connect(url).then(()=>
        {
            console.log("Database Connected Successfully");
        }).catch((err)=>{
            console.log("Database Connection Failed",err);
        })
    }
const schema = new mongoose.Schema({
    username :{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
                    
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamps:true});

const User = mongoose.model('logindetails',schema);

module.exports = {
    mongooseConnect,
    User,
}