AuthorsWS  
==============
**WS Application For A Book Store**

Heroku : https://authorsws.herokuapp.com/

GitHub: https://github.com/livnelang/AuthorsWS

API Documentation
--------------
**Routing Paths :**
* 1) https://authorsws.herokuapp.com/bestSellers
* 2) https://authorsws.herokuapp.com/bookById/number
* 3) https://authorsws.herokuapp.com/bookByYear/number

**AuthorsDAO Functions :**

* **bestSellers()**
<p>parameters: </p>
returns: all bestSellers books

* **getBookById(book_id)**
<p>parameters: book_id </p>
returns: specific book by his id

* **getBookByYear(year)**
<p>parameters: int_year </p>
returns: all books at specified year


Debug Options
--------------
<p>Every Route option, has special header message +
his path number.</p>
<p>Example: Header-1: " Hello Route no' 1 "</p>

Check it on your browser tools.



