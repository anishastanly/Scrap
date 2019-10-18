const express 			= require('express');
const router 			= express.Router();
const scrapeController    = require('./../controller/scrape');

router.get('/', scrapeController.scrape);

module.exports = router;