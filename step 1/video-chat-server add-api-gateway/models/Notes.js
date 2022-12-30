const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
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
	},
	user_id: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model('notes', NotesSchema);
