//import mongoose module
const mongoose = require("mongoose");

//create match schema
const matchSchema = mongoose.Schema({
    scoreOne:Number,
    scoreTwo:Number,
    teamOne:String,
    teamTwo:String
})


// Affect model name to schema
const match = mongoose.model("Match", matchSchema)
//export match 
module.exports = match;