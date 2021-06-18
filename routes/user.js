var express = require('express');
var router = express.Router();
var User = require('../service/user.service');

//Register
router.get('/user',(req,res)=>{
    const result = User.getUser();
    res.send(result);
});
module.exports = router;