var mongoose=require('mongoose');
const userscheme=mongoose.Schema({
    name:String,
    age:Number,
    company:String
});

module.exports=mongoose.model('users',userscheme);