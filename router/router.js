const express=require('express');
// const usercontroller = require('../controller/usercontroller');
let controller=require('../controller/usercontroller');
const {validate}=require('../middleware/userValidation');
const router=express.Router();

router.post("/register",controller.Register);
 router.post("/login",controller.loginUser)
// addnotes

module.exports=router;