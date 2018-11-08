const express = require('express');
const router = express.Router();
const context = require('../db/data');


/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(context.indexData)
  res.render('index', context.indexData);
});
module.exports = router;
