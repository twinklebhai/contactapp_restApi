
const port =process.env.PORT || 3000;
const express=require('express');
const app=express();

const mongoose=require('mongoose');
const schema=require('./models/users');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



mongoose.connect('mongodb+srv://twinklebhai:twinklebhai@cluster0.uaqnl.mongodb.net/postdb?retryWrites=true&w=majority',
{
	useNewUrlParser : true,
	useUnifiedTopology  : true
}).then(()=>{console.log("db connection done")}); 


const articleRoute=require('./routes/contact.js');
app.use('/contacts',articleRoute);





app.listen(port,()=>{console.log("app is listening on port :",port)});