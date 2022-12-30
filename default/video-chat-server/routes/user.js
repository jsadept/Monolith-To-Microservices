const express = require('express');
const controller = require('../controllers/user')

const router = express.Router();

const passport = require('passport');

router.post('/update-info', controller.updateInfo)
//router.post('/create', controller.create) //admin only

module.exports = router;
