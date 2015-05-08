var express = require('express');
var url = require('url');
var app = express();
var fs = require('fs');
var MyAuthorsDAO = require('./MyAuthorsDAO');
var dao = MyAuthorsDAO();

/*
/ Function that will print requsted path to console
*/
function printReqPath(req) {
	console.log("\nrequest from: " +req.url);
}

/**
/ Main Test Rout
*/
app.get('/', function(req,res) {
	var data = dao.getData();
	//console.log(data.authors);

});

/*
/ BestSellers Rout
*/
app.get('/bestSellers', function (req,res)  {
	printReqPath(req);
	var bestsellers = dao.bestSellers();
	app.set('json space',4);
	res.json(bestsellers);
});

/*
/ Book By id Rout
*/
app.get('/bookById/:book_id', function (req,res)  {
	printReqPath(req);
	var book = dao.getBookById(req.params.book_id);
	if (book != null) {
		app.set('json space',4);
		res.json(book);
	}
	else {
		res.end('Book With id - '+req.params.book_id+ " doesn't exists");
	}

});

/*
/ BooksByYear Rout
*/
app.get('/bookByYear/:year', function (req,res)  {
	printReqPath(req);
	var year_books = dao.getBookByYear(req.params.year);
	if(year_books.length !=0) {
		app.set('json space',4);
		res.json(year_books);
	}
	else {
		res.end('No Books came in - '+req.params.year);
	}
});



// Get Functions Routes

app.listen(process.env.PORT || 3000);
console.log('Listening on port ' + app.address().port +' ..');