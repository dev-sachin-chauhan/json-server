
var express = require('express');
var fs = require('fs');
var dw = require('./dataInterface')
var app = express();

app.get('/',function(req, res){
	res.send("Hello World");
})

app.get('/listUsers',function(req, res){
	fs.readFile(__dirname + '/' + 'users.json','utf-8',function(err,data){
	console.log(data);
	res.end(data);
})
})

var server = app.listen(8080,function(){
	console.log("Server Started at port 8080");
})
