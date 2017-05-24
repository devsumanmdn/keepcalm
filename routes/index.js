var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'FeedWee | Home'

  });
});

/* GET home page. */
router.get('/corporatelogin', function(req, res, next) {
  res.render('corporatelogin', {
     title: 'FeedWee | Corporate Login'

  });
});

/* GET home page. */
router.get('/feederlogin', function(req, res, next) {
  res.render('feederlogin', {
     title: 'FeedWee | Feeder Login'

  });
});

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', {
     title: 'FeedWee | Sign Up'

  });
});

module.exports = router;
