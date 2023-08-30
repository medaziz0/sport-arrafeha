//import mongoose module
const mongoose = require("mongoose");
//import mongoose-unique-validator module
const uniqueValidator = require("mongoose-unique-validator");
//create match schema
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{type:String,unique:true},
    pwd:{type:String},
    tel:String,
    role:String,
    avatar:String,
});
userSchema.plugin(uniqueValidator);


// Affect model name to schema
const user = mongoose.model("User", userSchema)
//export match 
module.exports = user;