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
  table: [{
    class: 'windows',
    type: 'idle',
    title: 'test123.123123.com',
    info: '192.168.1.102',
    folder: '/var/lib/....',
    isDeny: true,
    browserList: [{ name: 'Filefox' }, { name: 'Safari' }, { name: 'Ubuntu' }, { name: 'Chrome' }]

  }, {
    class: 'windows',
    type: 'building',
    title: 'test123.123123.com',
    info: '192.168.1.103',
    folder: '/var/lib/....',
    isDeny: false,
    browserList: [{ name: 'Filefox' }, { name: 'Safari' }, { name: 'Ubuntu' }, { name: 'Chrome' }]

  }, {
    class: 'ubuntu',
    type: 'building',
    title: 'test123.11111.com',
    info: '192.168.1.104',
    folder: '/var/lib/....',
    isDeny: false,
    browserList: [{ name: 'Filefox' }, { name: 'Safari' }]

  }, {
    class: 'debin',
    type: 'building',
    title: 'test123.11111.com',
    info: '192.168.1.105',
    folder: '/var/lib/....',
    isDeny: false,
    browserList: [{ name: 'Filefox' }, { name: 'Safari' }]

  }, {
    class: 'suse',
    type: 'idle',
    title: 'test123.11111.com',
    info: '192.168.1.107',
    folder: '/var/lib/....',
    isDeny: false,
    browserList: []

  }, {
    class: 'cent_os',
    type: 'idle',
    title: 'test123.11111.com',
    info: '192.168.1.107',
    folder: '/var/lib/....',
    isDeny: true,
    browserList: [{ name: 'Filefox' }, { name: 'Safari' }, { name: 'Ubuntu' }, { name: 'Chrome' }]

  },]
};
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', context);
});

module.exports = router;
