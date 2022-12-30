const express = require('express');
const controller = require('../controllers/notes')

const router = express.Router();



router.post('/create', controller.create)
router.delete('/remove/:id', controller.remove)
router.get('/:id', controller.findById)
router.get('/', controller.find)

module.exports = router;
