const express = require('express');
const router = express.Router();
const context = require('../db/data');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', context);
});
// just test if have time follow up
router.post('/add', function (req, res, next) {
  console.log(req.body.id);
  let id = req.body.id,
    name = req.body.name;
  context.table[id].browserList.push({ name: name });
  console.log(context.table[id].browserList);
  res.render('index', context);

});
// just test if have time follow up
router.get('/delete', function (req, res, next) {
  console.log(req.query.id);
  let id = req.query.aid,
    index = req.query.bid;
  context.table[id].browserList.splice(index, 1);
  console.log(context.table[id].browserList);
  res.render('index', context);

});


module.exports = router;
