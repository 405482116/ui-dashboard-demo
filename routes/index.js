const express = require('express');
const router = express.Router();

const context = {
  title: "Demo",
  menu: [{
    "id": 0,
    "label": "DASHBOARD",
    "icon": "icon-dashboard",
    "link": 'dashborad'
  }, {
    "id": 1,
    "label": "AGENT",
    "icon": "icon-sitemap"

  }, {
    "id": 2,
    "label": "MY CRUSE",
    "icon": "icon-boat"
  }
    , {
    "id": 3,
    "label": "HELP",
    "icon": "icon-life-bouy"
  }
  ],
  body: "My first post. Wheeeee!"
};
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', context);
});

module.exports = router;
