var express = require('express');
var router = express.Router();

var qUnit = "Qunit Test | ";

router.get('/test/index.html', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('test/test', {title: qUnit + "Test Home Page"});
});

router.get('/test/open.html', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('test/open', {title: qUnit + "Open Hours"});
});

router.get('/test/thanksgiving.html', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('test/thanksgiving', {title: qUnit + "Thanksgiving Hours"});
});

router.get('/test/memorial.html', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('test/memorial', {title: qUnit + "Memorial Day Hours"});
});

router.get('/test/labor.html', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('test/labor', {title: qUnit + "Labor Day Hours"});
});


router.get('/test/time.html', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('test/time', {title: qUnit + "How Many Days Ago"});
});

module.exports = router;
