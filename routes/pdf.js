var express = require('express');
var router = express.Router();
var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {
	fs.readFile('zayo.html',  function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
		var new_data = new Buffer(data, 'base64').toString('ascii');
		var old_value = "https://c.na4.content.force.com/servlet/servlet.ImageServer?id=01560000000Ucvz&oid=00D6000000079Qk";
		// var new_value = "file:///Users/dmr/workspace/ruby-node/combo-project/zayo_title.png";
		// var new_value = "http://localhost:3000/images/zayo_title.png";
		var new_value = "https://combo-7.herokuapp.com/images/zayo_title.png";
		var adusted_value = new_data.replace(old_value, new_value);
		var final_data = new Buffer(adusted_value).toString('ascii');
		console.log(final_data);
		wkhtmltopdf(final_data)
			.pipe(res);
		// wkhtmltopdf(data, { output: 'dmr.pdf' });
	});
});

module.exports = router;
