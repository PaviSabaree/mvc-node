var express = require('express');
var router = express.Router();

//Get Homepage
router.get('/',(req,res)=>{
    res.send('Hello, Welcome All');
});
module.exports = router;