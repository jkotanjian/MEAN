const mongoose = require('../config/mongoose.js');

var TaskSchema = new mongoose.Schema ({
	title: {type: String},
	description: {type: String, default: ''},
	completed: {type: Boolean, default: false},
}, {timestamps: true});

const task = mongoose.model('Task', TaskSchema);

module.exports = task;