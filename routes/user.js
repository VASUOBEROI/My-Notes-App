// This File will be responsible for all the routes related to single-user.
const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
res.send('<h1>Welcome User</h1>');

});

router.get('/new-Note',(req,res,next)=>{
       res.send('<form action="/all-Notes" method="POST"><input type="text" name="Title"><input type="submit" value="Submit"></form>');
});

router.get('/all-Notes',(req,res,next)=>{
res.send('<h1>Hi User, here are your Notes </h1>');
});

router.post('/all-Notes',(req,res,next)=>{
console.log(req.body);
res.redirect('/all-Notes');
});


module.exports={
userRouter:router
};

