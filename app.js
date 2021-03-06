const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');


mongoose.connect(config.db, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


const indexRouter = require('./routes/index');
const addRouter = require('./routes/addRecipe');
const detRouter = require('./routes/details');
const remRouter = require('./routes/removeRecipe');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/addRecipe', addRouter);
app.use('/details', detRouter);
app.use('/removeRecipe', remRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
