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
router.post('/add', function (req, res, next) {
    console.log(req.body.id);
    let id = req.body.id,
        name = req.body.name;
    context.table[id].browserList.push({ name: name });
    console.log(context.table[id].browserList);
    res.end(JSON.stringify(data));

});

module.exports = router;