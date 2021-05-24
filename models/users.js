const mongoose=require('mongoose');
let userschema =new mongoose.Schema({ 
				name : String,
				number: String
				
				});
module.exports=mongoose.model('contacts',userschema);
