var express = require('express');
var url = require('url');
var app = express();
var fs = require('fs');
var MyAuthorsDAO = require('./MyAuthorsDAO');

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

	var dao = MyAuthorsDAO();
	//dao.printAllData();
	var data = dao.getData();
	console.log(data);
	/*console.log(data);
	res.send("adasd");*/
});

// Get Functions Routes

app.listen(8080);
console.log('Listening on port 8080 ..');