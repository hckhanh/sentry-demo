var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  throw new Error('Broke!');
});

module.exports = router;
