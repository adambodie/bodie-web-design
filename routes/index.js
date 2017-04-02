var express = require('express');
var router = express.Router();

var bodie = "Bodie Web Design | ";

/* GET home page. */
router.get('/', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('index', {title: bodie + "Home"});
});

router.get('/about', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('about', {title: bodie + "About"});
});

router.get('/picture', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('picture', {title: bodie + "Picture of the Week"});
});

module.exports = router;
