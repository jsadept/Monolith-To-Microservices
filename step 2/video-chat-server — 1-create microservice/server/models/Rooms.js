const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
	id: {
		type: String,
		required: false,
	},
	date: {
		type: Date,
		required: false,
	},
	expire_time: {
		type: Date,
		required: false,
	},
	users: {
		type: Number,
		required: false,
	},
});

module.exports = mongoose.model('rooms', RoomSchema);
