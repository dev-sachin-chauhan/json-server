var express = require('express');
var fs = require('fs');
var dw = require('./jsonDBHelper');
var di	= require('./dataInterface');
var app = express();

app.get('/',function(req, res){
	res.send("Welcome to Users DB.");
})

app.get('/listUsers',function(req, res) {
	dbManager.listUsers(function(err, data) {	
		res.end(data);
	});
})

app.get('/addUser',function(req, res){
	var userslist = dw.listUsers();
	res.end(userslist);
})

app.get('/User:id', function (req, res) {
	var user = dw.getUser(req.params.id, function(user){
	res.end(user);	
	});
})

app.use(express.static('public'))


var server = app.listen(8081,function(){
	console.log("Server Started at port 8080");
	dbManager = di(dw);
})
