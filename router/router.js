const express=require('express');
//const usercontroller = require('../controller/usercontroller');
let controller=require('../controller/usercontroller');
const {validate}=require('../middleware/userValidation');
const auth=require('../middleware/authenticate');
const notesController=require('../controller/notescontroller');
// const {authenticate}=require('../middleware/authenticate');
const router=express.Router();

router.post("/register",controller.Register);
 router.post("/login",controller.loginUser);
// addnotes

router.post("/addNotes", auth, notesController.addNotes);
router.get("/getNotes", auth, notesController.getNotes);
router.get("/deleteNotes", auth, notesController.deleteNotes);
router.get("/archiveNotes", auth, notesController.deleteNotes);

module.exports=router;