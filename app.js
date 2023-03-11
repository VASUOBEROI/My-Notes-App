const express=require('express');         //dev-dependencies
const bodyParser=require('body-parser'); //prod-dependencies.

const userRouter=require('./routes/user');



const app=express(); 

// Middleware to Parse Incoming Request.
app.use(bodyParser.urlencoded({extended:false}));

app.use(userRouter.userRouter);







app.use('/',(req,res,next)=>{

// This will Handle All the Requests.

res.status(404).send('Page-Not-Found');

});


app.listen(3000);
// listening on Port 3000