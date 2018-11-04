const express = require('express');
const router = express.Router();
const context = require('../db/data');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', context);
});

router.post('/add', function (req, res, next) {
  console.log(req.body.id);
  let id = req.body.id,
    name = req.body.name;
  context.table[id].browserList.push({ name: 'aaa' });
  console.log(context.table[id].browserList);

  res.render('index', context);

});
router.get('/delete', function (req, res, next) {
  console.log(req.query.id);
  let aid = req.query.aid,
    bid = req.query.bid;
  context.table[aid].browserList.splice(bid, 1);
  console.log(context.table[aid].browserList);

  res.render('index', context);

});
module.exports = router;
