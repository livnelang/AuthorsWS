var fs = require('fs');

/**
/ Data Access Object
/ Represents our Data object -->	MyAuthorsDAO.js
*/
function MyAuthorsDAO(data) {
	console.log(" -- Data Constructor Activated -- \n");
	this.authors = data;
}
	

/**
/ Get Details Function
*/
MyAuthorsDAO.prototype.printAllData = function() {
	console.log( "Authors Data:  \n"+ this.authors);
};	



/**
/ What the module exports on initiate (Creating an instance)
*/
module.exports = function() {
	console.log('try');
	fs.readFile('./Books.js', 'utf8', function (err, data) {
	var jsonData;
	  if (err) {
	  	throw err;
	  } 
	  console.log(data);
	  jsonData = JSON.parse(data.toString());
	});
	var dao = new MyAuthorsDAO(jsonData);
	return dao;
};