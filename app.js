const path=require('path');  // node core module.

const express=require('express');         //dev-dependencies
const bodyParser=require('body-parser'); //prod-dependencies.

const userRouter=require('./routes/user');



const app=express(); 

// Middleware to Parse Incoming Request.
app.use(bodyParser.urlencoded({extended:false}));
// Middleware to Serve Static Files.Exposing the Public directory.
app.use(express.static(path.join(__dirname,'public')));


// All routes starting with /user
app.use('/user',userRouter.userRouter);

// All routes starting with /. 
app.use('/',(req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


app.listen(3000);
// listening on Port 3000