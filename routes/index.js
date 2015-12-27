var express = require('express');
var router = express.Router();

var bodie = "Bodie Web Design | ";

/* GET home page. */
router.get('/', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('index', {title: bodie + "Home"});
});

router.get('/about.html', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('about', {title: bodie + "About"});
});
 
router.get('/archive.html', function(req, res) {
	var path = req.path;
	res.locals.path = path;
	res.render('archive', {title: bodie + "Archive"});
});

module.exports = router;
