const mong = require("mongoose");

const userSchema = new mong.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
    },

}, {timestamps: true});

const user = mong.model('user',userSchema)
module.exports = user;