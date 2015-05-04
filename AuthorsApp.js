var express = require('express');
var url = require('url');
var app = express();
var fs = require('fs');

app.get('/', function(req,res) {
	//res.send('HelloWorld');
	// Gets Json FileS

	/*var objectData;
	fs.readFile('./Books.js', 'utf8', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	  objectData = JSON.parse(data.toString());
	  	res.send(objectData);
}); */

	 console.log("inside get");
	var dao = require('./MyAuthorsDAO');
	//dao.printAllData();
	console.log(dao);
});

// Get Functions Routes

app.listen(8080);
console.log('Listening on port 8080 ..');