const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE);
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error in connection with databse"));
db.once('open',()=>{
    console.log("Connected to the databse");
})