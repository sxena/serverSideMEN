
const express = require('express')
const app = express()



var todayDay = function (req, res, next) {
  req.todayDay = new Date()
  next()
}
app.use(todayDay)

app.get('/', function (req, res) {
  var responseDay = "toady's date </br>"
      responseDay += 'today is: ' + req.todayDay
  res.send(responseDay)
})

console.log('hhhhhhhh');
module.exports = app;
