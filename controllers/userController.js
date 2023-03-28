
const Notes=require('../models/notesModel.js');


const getLandingPage=(req,res,next)=>{
   res.render('landingPage.ejs',{pageTitle:'User-Main-Page',pageHeading:'Welcome User to My-Notes-App'});
    
}
const getNewNotePage=(req,res,next)=>{
    res.render('newNote',{pageTitle:'New Note',pageHeading:'Hi User Enter the Note'});
   }
const getAllNotesPage=(req,res,next)=>{
    const notes=Notes.fetchAll();
    res.render('allNotes.ejs',{pageTitle:'User-All-Notes',pageHeading:'Hi User Check Your Notes',allNotes:notes})
    }

    // POST==> user/AllNotes
    const postAllNotesPage=(req,res,next)=>{
        // notes.push(req.body);
        const newNote=new Notes(req.body.title,req.body.description);
        newNote.save();
    console.log(req.body);
    res.redirect('/user/all-Notes');
    }

module.exports={
    getLandingPage:getLandingPage,
    getNewNotePage:getNewNotePage,
    getAllNotesPage:getAllNotesPage,
    postAllNotesPage:postAllNotesPage
}