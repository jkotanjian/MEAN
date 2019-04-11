const mongoose = require('../config/mongoose.js');

const UserSchema = new mongoose.Schema ({
	name: String,
	quote: String,
}, {timestamps: true});
mongoose.model('User', UserSchema);
const user = mongoose.model('User');

module.exports = user;