const express = require('express');
const router = express.Router();

const bodie = "Bodie Web Design | ";
/* GET home page. */
router.get('/', (req, res) => {
	const path = req.path;
	res.locals.path = path;
	res.render('index', {title: bodie + "Home"});
});

router.get('/about', (req, res) => {
	const path = req.path;
	res.locals.path = path;
	res.render('about', {title: bodie + "About"});
});

router.get('/picture', (req, res) => {
	const path = req.path;
	res.locals.path = path;
	res.render('picture', {title: bodie + "Picture of the Week"});
});

module.exports = router;
