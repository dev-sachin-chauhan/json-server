var fs = require("fs");


var jsoncontainer = {
	listUsers : function(callback) {
		fs.readFile(__dirname + '/' + 'users.json','utf-8',function(err, data) {
			console.log(data);
			callback(null, data);
		});
	},

	getUser : function(id, callback){
		fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       			var users = JSON.parse( data );
       			var user = users["user" + id]
       			console.log( user );
       			callback(JSON.stringify(user));	
		});
	},
	
	addUser : function() {
	
	},
	
	deleteUser : function() {
	
	}
}

module.exports = jsoncontainer;
