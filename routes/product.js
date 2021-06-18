var express = require('express');
var router = express.Router();
var product = require ('../service/product.service')


router.get('/list',(req,res)=>{
   const result = product.listProduct();
    res.send(result);
});

router.post('/create',(req,res)=>{
    const result = product.listProduct();
     res.send(result);
 });
module.exports = router;