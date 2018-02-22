var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var subCategory = {
    Title: "Ask me anything mentioned below",
    Phone: "Phone",
    Apps: "Apps",
    Calendar: "Calendar",
    Messages: "Messages",
    Sports: "Sports"
  };
  res.render('category', { Details: subCategory });
});


router.get('/Apps', function(req, res, next){
  res.render('../Main/Apps');
});

router.get('/Calendar', function(req, res, next){
  res.render('../Main/Calendar');
});

router.get('/Messages', function(req, res, next){
  res.render('../Main/Messages');
});

router.get('/Phone', function(req, res, next){
  res.render('../Main/Phone');
});

router.get('/Phone', function(req, res, next){
  res.render('../Main/Phone');
});


module.exports = router;
