const mongoose = require('mongoose')

const Team = new mongoose.Schema({
	firstname: {type: String, default:''}
 
});

module.exports = mongoose.model('Team', Team)