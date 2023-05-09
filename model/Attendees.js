const mongoose=require('mongoose');
const attendeesSchema=mongoose.Schema({
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        unique:true,
    }
},{timestamps:true});
module.exports=mongoose.model('Attendees',attendeesSchema);