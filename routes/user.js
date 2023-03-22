// This File will be responsible for all the routes related to single-user starting with /user.
const path=require('path'); // node core module
const rootDir=require('../utils/path'); // importing exports from file.

const express=require('express'); // Prod-Dependency
const router=express.Router();     

const notes=[];
// user/ ==>Get
router.get('/',(req,res,next)=>{
res.render('landingPage.ejs',{pageTitle:'User-Main-Page',pageHeading:'Welcome User to My-Notes-App'});

});

//  user/newNote/ ==>Get
router.get('/new-Note',(req,res,next)=>{
 res.render('newNote',{pageTitle:'New Note',pageHeading:'Hi User Enter the Note'});
});


//  user/all-Notes ==> Get
router.get('/all-Notes',(req,res,next)=>{
res.render('allNotes.ejs',{pageTitle:'User-All-Notes',pageHeading:'Hi User Check Your Notes',allNotes:notes})
});

//   user/all-Notes ==>Post
router.post('/all-Notes',(req,res,next)=>{
    notes.push(req.body);
console.log(req.body);
res.redirect('/user/all-Notes');
});


module.exports={
userRouter:router,
userNotes:notes
};

