const express = require('express');
const router = express.Router();
const context = require('../db/data');


// deault data
let data = {
    status: '204',
    msg: 'success',
    data: context.tableData
};

// just test if have time follow up
router.get('/table', function (req, res, next) {
    console.log(context.table);
    res.end(JSON.stringify(data));
});

module.exports = router;