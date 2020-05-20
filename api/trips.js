const express = require('express');
const router = express.Router();
// const mongoTrips = require('../../db/trips');

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

router.use(requestTime)

router.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += 'Requested at: ' + req.requestTime
  // responseText += "</br >klkklkllklklklkl"
  res.send(responseText)
});



// router.get('/', function (req, res) {
//   res.send('nothing here yet')
// })

module.exports = router;
