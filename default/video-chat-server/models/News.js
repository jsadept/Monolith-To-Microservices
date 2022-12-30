const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
	id: {
		type: String,
		required: false,
	},
	title: {
		type: String,
		required: false,
	},
	content: {
		type: String,
		required: false,
	},
	date: {
		type: Date,
		required: false,
	}
});

module.exports = mongoose.model('news', NewsSchema);
