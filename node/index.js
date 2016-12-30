var express = require('express');
const fs = require('fs');//加载框架
var app = express();
app.use(express.static('node'));//把相对于“我”的目录pop作为我们的web服务目录
app.all('*',(req,res,next) =>{
	res.header("Access-Control-Allow-Origin","*");
    next();
})
app.get('/',function(req,res){
    fs.readFile('data/1.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.get('/1',function(req,res){
    fs.readFile('data/2.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.get('/2',function(req,res){
    fs.readFile('data/4.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.listen(5001,function(){
	console.log('服务已启动')
})