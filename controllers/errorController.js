const get404Page=(req,res,next)=>{
    res.status(404).render('404.ejs',{pageTitle:'Page Not Found',pageHeading:'Page not Found'});
    }

    module.exports={
        get404Page:get404Page
    }