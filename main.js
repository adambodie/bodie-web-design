'use strict';

var bodie = "Bodie Web Design | ";

// my dependency variables
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var posts = require('./mock/posts.json');
var postsLists = Object.keys(posts).map(function (value) {
												return posts[value]});
// my route variables
var routes = require('./routes/index');
var tests = require('./routes/tests');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/static', express.static(__dirname + '/public'));

app.use(favicon(__dirname + '/public/img/icon.gif'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/', tests);

-app.get('/blog/:title?', function(req, res) {
 -	var path = req.path;
 -	res.locals.path = path;
 -
 -	var title = req.params.title;
 -	if (title === undefined) {
 -		res.status(503);
 -		res.render('blog', {title: bodie + "Blog", posts: postsLists});
 -	} else {
 -		var post = posts[title] || {};
 -		res.render('post', {title: bodie + "Blog", post :post});
 -	}
 -});
 -
 -app.get('/posts', function(req, res) {
 -	if (req.query.raw) {
 -		res.json(posts);
 -	} else {
 -		res.json(postsLists);
 -	}
 -});
 -

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
