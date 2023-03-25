const path=require('path');  // node core module.

const express=require('express');         //prod-dependencies
const bodyParser=require('body-parser'); //prod-dependencies.

const userRouter=require('./routes/user');
const errorController=require('./controllers/errorController');



const app=express(); 

// Using Templating-Engine to Return Dynamic Data to Users.Exposing the Views directory as well.
app.set('view engine','ejs');
app.set('views','views');




// Middleware to Parse Incoming Request.
app.use(bodyParser.urlencoded({extended:false}));
// Middleware to Serve Static Files.Exposing the Public directory.
app.use(express.static(path.join(__dirname,'public')));


// All routes starting with /user
app.use('/user',userRouter.userRouter);

// Default - Landing Page Route
app.get('/',(req,res,next)=>{
    res.render('landingPage.ejs',{pageTitle:'My-Notes-App',pageHeading:'Welcome to My-Notes-App'});
})


// All routes starting with /. 
app.use('/',errorController.get404Page);


app.listen(3000);
// listening on Port 3000