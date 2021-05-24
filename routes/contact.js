const express=require('express');
const router=express.Router();

const schema=require('./../models/users');

const app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router.get('/all',async (req,res)=>{
 const data= await schema.find({});
res.status(200).send(data);
});
router.post('/add',async(req,res)=>{
try
{
	var  newdata=new schema({"name":req.body.name,"number":req.body.number});
	console.log("new data from new schema",newdata);
	var data=await newdata.save();
	console.log(data);
	res.status(201).send(data);
}
catch(e)
{
console.log(e);
}

});


router.get('/name/:nam',async (req,res)=>{
try
{
var data= await schema.findOne({"name":req.params.nam});
res.status(201).send(data);
console.log(data);
}
catch(e)
{
console.log(e);
}
});

router.get('/number/:num',async (req,res)=>{
try
{
var data= await schema.find({"number":req.params.num});
res.status(201).send(data);
console.log(data);
}
catch(e)
{
console.log(e);
}
});

router.put('/edit/number/:num',async(req,res)=>{
try
{
	var data= await schema.findOne({"number":req.params.num});
	console.log("changing number for this data",data);
	
data.name=req.body.name;
data.number=req.body.number;


	var data=await data.save();
	console.log(data);
	res.status(204).send(data);
}
catch(e)
{
console.log(e);
}

});

router.put('/edit/name/:nam',async(req,res)=>{
try
{
	var finddata= await schema.findOne({"name":req.params.nam});
	console.log("changing name for this data",data);
var data=finddata;
data.name=req.body.name;
data.number=req.body.number;
	console.log("new data is ",data);
	 var newdata=await  data.save();
	console.log("data after saving ",newdata);
	res.status(204).send(data);
}
catch(e)
{
console.log(e);
}
});

module.exports = router;
