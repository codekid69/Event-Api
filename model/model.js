const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    type:{
        type:'String',
        required:true
    },
    uid:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        required:true
    },
    tagline:{
        type:String,
        required:true
    },
    schedule:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:'String',
        default:""
    },
    moderator:{
        type:'String',
        required:true
    },
    category:{
        type:'String',
        required:true
    },
    sub_category:{
        type:'String',
        required:true
    },
    rigor_rank:{
        type:Number,
        required:true
    },
    attendees:{
        type:Array
    }
},{timestamps:true});
module.exports=mongoose.model('User',userSchema);