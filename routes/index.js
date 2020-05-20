var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'como es ta' });
});


// 
// router.post('/trips', (req, res) => {
//   res.send('/Trips')
// })



module.exports = router;
