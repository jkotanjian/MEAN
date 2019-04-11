const mongoose = require('../config/mongoose.js');

const PupperSchema = new mongoose.Schema ({
	name: {type: String, minlength: 1},
	age: {type: Number, minlength: 1},
	weight: {type: String, minlength: 1},
	activity: {type: String, minlength: 5},
}, {timestamps: true});
mongoose.model('Pupper', PupperSchema);
const pupper = mongoose.model('Pupper');

module.exports = pupper;