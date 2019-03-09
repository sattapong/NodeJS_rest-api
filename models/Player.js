const mongoose = require("mongoose")


const Player = new mongoose.Schema({
    
firstname: {type: String, default:''},
lastname: {type: String, default:''},
age: {type: Number, default:40},
team: {type: String, default:''}

})


module.exports = mongoose.model('Player',Player);

