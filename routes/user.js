// This File will be responsible for all the routes related to single-user starting with /user.
const path=require('path'); // node core module
const rootDir=require('../utils/path'); // importing exports from file.
const userController=require('../controllers/userController');

const express=require('express'); // Prod-Dependency
const router=express.Router();     


// user/ ==>Get
router.get('/',userController.getLandingPage);

//  user/newNote/ ==>Get
router.get('/new-Note',userController.getNewNotePage);


//  user/all-Notes ==> Get
router.get('/all-Notes',userController.getAllNotesPage);

//   user/all-Notes ==>Post
router.post('/all-Notes',userController.postAllNotesPage);


module.exports={
userRouter:router
};

