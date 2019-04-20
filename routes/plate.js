var express = require('express');
var router = express.Router();
let mysql = require('./../db/db');

router.post('/create', async (req, res)  =>  {
    plate = JSON.stringify(req.body);
    // console.log("creating plate...", );
    console.log("creating plate...", JSON.parse(plate));

    plates =  await createPlate();
    console.log(plates);
    res.json({data : plates });
});

async function createPlate(){
    try {
        res = await mysql.db('show databases;');
        return res;        
    } catch (error) {
        console.log(error);
        return;
    }

}
module.exports = router;
