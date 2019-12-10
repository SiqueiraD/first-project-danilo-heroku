const express = require('express');
const router = express.Router();
const agua = require('../controllers/agua.controller');

router.get('/', agua.list_all_agua);
router.post('/', agua.create_agua);


// router.get('/agua/title/:title', agua.search_title_agua);

module.exports = router;