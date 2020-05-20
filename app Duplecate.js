var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongodb = require('mongodb')
var app = express();



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

mongodb.connect(process.env.DB_CONNECT ,{useUnifiedTopology: true,
useNewUrlParser: true }, () => console.log('connected to db!'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trips', indexRouter);
app.use('/users', usersRouter);

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


/** post and send and get function showing */

//
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += 'Requested at: ' + req.requestTime
  responseText += "</br >klkklkllklklklkl"
  res.send(responseText)
});


const popRoute = require('./pop')

app.use('/api/user', popRoute);


const todayAPI = require('./api/today');
app.use('/today', todayAPI);

const index = require('./index');
app.use('/index', index);



module.exports = app;
