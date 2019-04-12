const mongoose = require('../config/mongoose.js');

var PeopleSchema = new mongoose.Schema ({
	name: {type: String, minlength: 1},
}, {timestamps: true});

const people = mongoose.model('People', PeopleSchema);

module.exports = people;