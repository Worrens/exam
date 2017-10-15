require('babel-polyfill');
var express = require('express');
var paperDB=require('../DB/paperDB');
var route = express.Router();
route.get('/getSubjectType',(req,resp)=>{
	paperDB.getSubjectType().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
route.get('/getDepartmentes',(req,resp)=>{
	paperDB.getDepartmentes().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
route.get('/getSubjectLevel',(req,resp)=>{
	paperDB.getSubjectLevel().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
route.get('/getTopics',(req,resp)=>{
	paperDB.getTopics().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
route.post('/postSubject',(req,resp)=>{
	paperDB.getSubject().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

module.exports=route;