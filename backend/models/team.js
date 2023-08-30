//import mongoose module
const mongoose = require("mongoose");

//create match schema
const teamSchema = mongoose.Schema({
    name:String,
    owner:String,
    stadium:String
})


// Affect model name to schema
const team = mongoose.model("Team", teamSchema)
//export match 
module.exports = team;