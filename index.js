var express = require('express');
var path = require('path');
//routes
var routes = require('./routes/home');
var user = require('./routes/user');
var product = require('./routes/product');

//init app
var app = express();


//set static folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/',routes);
app.use('/user',user);
app.use('/product',product);

//set port
app.listen(process.env.PORT||8000);
