const express = require('express');
const cors  = require('cors');
const { room } = require('./api/room');

module.exports = async (app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());

    //api
    room(app);
}
