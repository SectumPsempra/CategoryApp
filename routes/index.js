var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var shanur = {
    name:"shanur",
    roll:"CSE/14/02"
  }
  res.render('index', { shanur: shanur });
});

module.exports = router;
