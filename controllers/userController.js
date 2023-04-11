
const Notes=require('../models/notesModel.js');


const getLandingPage=(req,res,next)=>{
   res.render('landingPage.ejs',{pageTitle:'User-Main-Page',pageHeading:'Welcome User to My-Notes-App'});
    
}
const getNewNotePage=(req,res,next)=>{
    res.render('newNote',{pageTitle:'New Note',pageHeading:'Hi User Enter the Note'});
   }

// We are passing Callback function to fetchAll,Once Some Async Task has been Performed in FetchAll,
// From there call-me-back will be executed, which is passing an argument that we will get here.


const getAllNotesPage=(req,res,next)=>{
    Notes.fetchAll((notes)=>{
        res.render('allNotes.ejs',{pageTitle:'User-All-Notes',pageHeading:'Hi User Check Your Notes',allNotes:notes})
    });
//     Notes.fetchAll((notes)=>{
// res.render('allNotes.ejs',{pageTitle:'User-All-Notes',pageHeading:'Hi User Check Your Notes',allNotes:notes})
//     });
   
    }

    // POST==> user/AllNotes
    const postAllNotesPage=(req,res,next)=>{
        // notes.push(req.body);
        const newNote=new Notes(req.body.title,req.body.description);
        newNote.save();
    console.log(req.body);
    res.redirect('/user/all-Notes');
    }

    const getNotePage=(req,res,next)=>{
        const notesId=req.params.notesId;
        console.log("Note Id "+notesId);
        Notes.fetchOne(notesId,(note)=>{
           console.log(note);
        })



        res.render('notes-details.ejs',{pageTitle:"Note-Detail",pageHeading:"Check Details about Note"});
    }


    
module.exports={
    getLandingPage:getLandingPage,
    getNewNotePage:getNewNotePage,
    getAllNotesPage:getAllNotesPage,
    postAllNotesPage:postAllNotesPage,
    getNotePage:getNotePage
}