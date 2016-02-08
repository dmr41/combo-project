var express = require('express');
var router = express.Router();
var wkhtmltopdf = require('node-wkhtmltopdf');
var fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {
	// var rstream = fs.createReadStream('zayo.html');
  // rstream.pipe(res);
});

module.exports = router;
