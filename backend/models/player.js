//import mongoose module
const mongoose = require("mongoose");

//create match schema
const playerSchema = mongoose.Schema({
    name:String,
    age:Number,
    position:String
})


// Affect model name to schema
const player = mongoose.model("Player", playerSchema)
//export match 
module.exports = player;