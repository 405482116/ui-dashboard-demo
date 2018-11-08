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
router.get('/delete', function (req, res, next) {
    console.log(req.query.id);
    let id = req.query.id,
        index = req.query.index;
    context.table[id].browserList.splice(index, 1);
    console.log(context.table[id].browserList);
    res.end(JSON.stringify(data));
});

module.exports = router;