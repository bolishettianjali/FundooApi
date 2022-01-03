const express=require('express');

var router=require('./router/router');
let {db}=require('./config/db');


let app=express();
var expressValidator=require('express-validator');

app.use(express.json());
app.use(expressValidator());
app.use('/',router);
// launching application at particular port
app.listen(2000, function () {
        console.log(`Applicaion is running at 2000`);
      });
   
db();


  