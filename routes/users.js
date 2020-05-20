var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/createuser',(req,res) => {
  let users = {
    name: 'xena',
    age: 33,
    gender: 'female'
  }
  user.create(users).then(function(userdata){
    res.send(userdata)
  })
})


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
