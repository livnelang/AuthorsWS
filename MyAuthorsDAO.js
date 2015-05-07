var fs = require('fs');

/**
/ Data Access Object
/ Represents our Data object -->	MyAuthorsDAO.js
*/
function MyAuthorsDAO(data) {
	console.log(" -- Data Constructor Activated -- \n");
	//console.log(data);
	this.authors = [];
	this.name = "livne";
}
	
/**
/ Set JSON Data Function
*/
MyAuthorsDAO.prototype.setData = function(data) {
	this.authors = data;
};


/**
/ Print to Console JSON File
*/
MyAuthorsDAO.prototype.printAllData = function() {
	console.log(this.name);
	console.log( "Authors Data:  \n"+ this.authors);
};	

/**
/ Get Back JSON Data Objet
*/
MyAuthorsDAO.prototype.getData = function() {
	return this.authors;
};	


/**
/ What the module exports on initiate (Creating an instance)
*/
module.exports = function() {
	console.log('try');
	var x=5;
	var jsonData;
	var dao;
	// Need To Be Synced !
	fs.readFile('./Books.js', 'utf8', function (err, data) {
	  if (err) throw err;
	  jsonData = JSON.parse(data.toString());
	  dao = new MyAuthorsDAO(jsonData);
	  console.log(x);
	  //console.log(jsonData);
	})
	console.log("asdsd");
		//var dao = new MyAuthorsDAO(jsonData);
		//dao.setData(jsonData);
		console.log(dao);
		return dao;	
};