const express = require('express');
const router = express.Router();
const context = require('../db/data');


// deault data
let data = {
    status: '200',
    msg: 'success',
    data: context.tableData
};

// just test if have time follow up
router.get('/table', function (req, res, next) {
    res.end(JSON.stringify(data));
});

module.exports = router;
