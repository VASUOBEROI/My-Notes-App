const fs=require('fs');
const path=require('path');

const rootDir=require('../utils/path');

const storePath=path.join(rootDir,'data','notes.json');


// const notes=[];

module.exports=class Notes{
    constructor(tit,des)
   {
    this.title=tit;
    this.description=des;
   }
   
   save()
   {
    this.id=Math.random().toString();
    // Pushing the object
    //    notes.push(this);
    
    // First Reading the File. 
    fs.readFile(storePath,(err,fileContent)=>{
        let notes=[];
        if(!err)
        {
            // Converting Json Data to Js Object using the parse method.
             notes=JSON.parse(fileContent);
        }
        notes.push(this);
        // Adding the Data to the File in JSOn Format.
        fs.writeFile(storePath,JSON.stringify(notes),(err)=>{
            console.log(err);
        })
    })





   }
   // Making this method as static so that we dont need to create a dummy Object note to fetch allNotes.
   static fetchAll(cb)
   {
    fs.readFile(storePath,(err,fileContent)=>{
        if(err)
        {
             cb([]);
        }
          cb(JSON.parse(fileContent));
    })
   }
   static fetchOne(id,cb)
   {
       fs.readFile(storePath,(err,fileContent)=>{
        let notes=[];
        if(!err)
        {
            notes=JSON.parse(fileContent); 
        }
        let note=notes.find(p=>p.id==id);
        cb(note);
       })
   }

}


