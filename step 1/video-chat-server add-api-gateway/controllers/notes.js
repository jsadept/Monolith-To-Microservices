const express = require('express');
const { v4: uuid } = require('uuid');
const router = express.Router();
const Notes = require('../models/Notes');
const {createNote} = require('./user');


module.exports.create = async (req, res) => {
	return createNote(req, res)
		.then((response) => res.status(200).send(response),
			(error) => res.status(404).send(`Error create Notes:${error}`))
};

module.exports.find = async (req, res) => {
	return Notes.find().sort({creationTime:-1})
		.then((response) => res.status(200).send(response),
			(error) =>  res.status(404).send(`Error finding Notes:${error}`));

};

module.exports.findById = async (req, res) => {
	return await Notes.findById(req.params.id)
		.then(
			(response) => res.status(200).send(response),
			(error) =>  res.status(404).send(`Error finding NotesById:${error}`));
};

module.exports.remove = async (req, res) => {
	return await Notes.findByIdAndDelete(req.params.id)
		.then((response) => res.status(200).send(response),
			(error) => res.status(404).send(`Error remove Notes:${error}`))
}
