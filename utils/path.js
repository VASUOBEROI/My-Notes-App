const path=require('path');


module.exports=path.dirname(require.main.filename);

// This is done so that by importing this file, Everyfile has access to rootDir of Project.
// Change:
// Previous: res.sendFile(path.join(__dirname,'../','views','index.html'));
// Update: res.sendFile(path.join(rootDir,'views','index.html'));