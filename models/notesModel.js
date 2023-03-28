const notes=[];

module.exports=class Notes{
    constructor(tit,des)
   {
    this.title=tit;
    this.description=des;
   }
   
   save()
   {
    // Pushing the object
       notes.push(this);
   }
   // Making this method as static so that we dont need to create a dummy note to fetch allNotes.
   static fetchAll()
   {
       return notes;
   }

}



// module.exports={

//     Notes:Notes
// }