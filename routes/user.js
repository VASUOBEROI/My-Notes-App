// This File will be responsible for all the routes related to single-user starting with /user.
const path=require('path'); // node core module
const rootDir=require('../utils/path'); // importing exports from file.

const express=require('express'); // Prod-Dependency
const router=express.Router();     

router.get('/',(req,res,next)=>{
res.sendFile(path.join(rootDir,'views','/userMainPage.html'));

});

router.get('/new-Note',(req,res,next)=>{
 res.sendFile(path.join(rootDir,'views','newNote.html'));
});

router.get('/all-Notes',(req,res,next)=>{
res.send('<h1>Hi User, here are your Notes </h1>');
});

router.post('/all-Notes',(req,res,next)=>{
console.log(req.body);
res.redirect('/user/all-Notes');
});


module.exports={
userRouter:router
};

