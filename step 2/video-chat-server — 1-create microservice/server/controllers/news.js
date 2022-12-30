const express = require('express');
const { v4: uuid } = require('uuid');
const router = express.Router();
const News = require('../models/News');

module.exports.find = async (req, res) => {
	return News.find().sort({creationTime:-1})
		.then((response) => res.status(200).send(response),
			(error) =>  res.status(404).send(`Error finding News:${error}`));

};

module.exports.findById = async (req, res) => {
	return await News.findById(req.params.id)
		.then(
			(response) => res.status(200).send(response),
			(error) =>  res.status(404).send(`Error finding NewsById:${error}`));
};

module.exports.create = async (req, res) => {
	console.log('REQ', req.body)
	const newNews = new News({
		id: uuid(),
		title: req.body.title,
		content: req.body.content,
		date: Date.now()
	});
	return News.create(newNews)
		.then((response) => res.status(200).send(response),
			(error) => res.status(404).send(`Error create News:${error}`))
};

module.exports.remove = async (req, res) => {
	return News.findByIdAndDelete(req.params.id)
		.then((response) => res.status(200).send(response),
			(error) => res.status(404).send(`Error remove News:${error}`))
}
