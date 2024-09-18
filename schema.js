const mongoose = require('mongoose');
const modelSchema = mongoose.Schema({
	name: {
		type: String,
		//required: true
	},
	description: {
		type: String,
		//required: true
	},
	price: {
		type: Number,
		//required: true
	}
});
const model = mongoose.model('model', modelSchema);
module.exports = model;