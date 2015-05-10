var fs = require('fs');

/**
/ Data Access Object
/ Represents our Data object -->	MyAuthorsDAO.js
*/
function MyAuthorsDAO(data) {
	console.log(" -- Data Constructor Activated -- \n");
	//console.log(data);
	this.data_obj = data;;
	this.name = "livne";
}

/**
/ Print to Console JSON File
*/
MyAuthorsDAO.prototype.printAllData = function() {
	console.log(this.name);
	console.log( "Authors Data:  \n"+ this.data_obj);
};	

/**
/ Get Back JSON Data Objet
*/
MyAuthorsDAO.prototype.getData = function() {
	return this.data_obj;
};

/**
/ Gets All BestSellers Books
*/
MyAuthorsDAO.prototype.bestSellers = function() {
	var arr = this.data_obj.authors;
	var bestsellers = [],book;
	for(var i = 0; i<arr.length; i++) { 
		for(var j =0;j<arr[i].books.length;j++) {
			book = arr[i].books[j];
			if(book.bestseller == true) {
				console.log(book);
				bestsellers.push(book);
			}
		}
	}
	return bestsellers;
};

/**
/ Gets A book by id
*/
MyAuthorsDAO.prototype.getBookById = function(book_id) {
	var arr = this.data_obj.authors;
	for(var i = 0; i<arr.length; i++) { 
		for(var j =0;j<arr[i].books.length;j++) {
			book = arr[i].books[j];
			if(book.id == book_id) {
				return book;
			}
		}
	}
	return null;
};

/**
/ Gets All books by specific year
*/
MyAuthorsDAO.prototype.getBookByYear = function(_year) {
	var arr = this.data_obj.authors;
	var year_books = [];
	for(var i = 0; i<arr.length; i++) { 
		for(var j =0;j<arr[i].books.length;j++) {
			book = arr[i].books[j];
			if(book.year == _year) {
				year_books.push(book);
			}
		}
	}
	return year_books;
};




/**
/ What the module exports on initiate (Creating an instance)
*/
module.exports = function() {
	var jsonData,dao;
	jsonData = JSON.parse(fs.readFileSync('./Books.js', "utf8"));
	dao = new MyAuthorsDAO(jsonData);
	return dao;	
};