var express = require('express');
var router = express.Router();
var offer = require('../service/offer.service')

router.get('/list',(req,res)=>{
   const result= offer.listoffers()
    res.send(result);
});
module.exports = router;