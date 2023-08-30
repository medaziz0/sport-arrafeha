//import mongoose module
const mongoose = require("mongoose");

//create match schema
const imcSchema = mongoose.Schema({
    name:String,
    taille:Number,
    poid:Number,
    imcValue:Number,
})


// Affect model name to schema
const imc = mongoose.model("Imc", imcSchema)
//export match 
module.exports = imc;