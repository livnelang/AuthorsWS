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
app.get('/', 
	function (req,res,next) {
		res.set('Header-Test','Hello Main Route'),	
		next();
	},
	function (req,res) {
		res.set('Content-Type', 'text/html');
		res.send('<html><body> <h1>Welcome, you can choose 3 routing ways : </h1>'+
							'<h2> https://authorsws.herokuapp.com/bestSellers </h2>'+
							'<h2> https://authorsws.herokuapp.com/bookById/number </h2>'+
							'<h2> https://authorsws.herokuapp.com/bookByYear/number</h2> <p></p>'+
							'<h2> Enjoy </h2></body></html>');
	}
);


/*
/ BestSellers Rout
*/
app.get('/bestSellers',
	function (req,res,next) {
		printReqPath(req);
		res.set('Header-1','Hello Route no 1'),	
		next();
	},
	function (req,res) {
		var bestsellers = dao.bestSellers();
		app.set('json space',4);
		res.json(bestsellers);
	}
);

/*
/ Book By id Rout
*/
app.get('/bookById/:book_id',
	function (req,res,next) {
		printReqPath(req);
		res.set('Header-2','Hello Route no 2'),	
		next();
	},
	function (req,res) {
		var book = dao.getBookById(req.params.book_id);
		if (book != null) {
			app.set('json space',4);
			res.json(book);
		}
		else {
			res.end('Book With id - '+req.params.book_id+ " doesn't exists");
		}
	}
);


/*
/ BooksByYear Rout
*/
app.get('/bookByYear/:year',
	function (req,res,next) {
		printReqPath(req);
		res.set('Header-3','Hello Route no 3'),	
		next();
	},
	function (req,res) {
		var year_books = dao.getBookByYear(req.params.year);
		if(year_books.length !=0) {
			app.set('json space',4);
			res.json(year_books);
		}
		else {
			res.end('No Books came in - '+req.params.year);
		}
	}
);




// Get Functions Routes

app.listen(process.env.PORT || 3000);
console.log('Listening on port ' + process.env.PORT +' ..');