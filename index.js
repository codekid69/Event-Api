const express=require('express');
const app=express();
const db=require('./config/mongoose');
const port=8000;
app.use(express.json());
app.use('/',require('./routes/index'))
app.listen(port,(error)=>{
     if(error){
        console.log(`Error in running the server ${error}`);
        return;
     }
     console.log(`Server running on port ${port}`);
})

