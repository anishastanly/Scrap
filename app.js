var express = require('express');

var app     = express();
const scrapeRouter = require('./routes/scrape');

app.use('/scrape', scrapeRouter);



module.exports = app;
