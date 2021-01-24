var newBook = document.getElementById('newBook'); //btn for add new book
var newItemForm = document.querySelector('.new-item-form'); //form of adding new book

var closeFormBtn = document.getElementById('closeBtn'); //btn for close form

var submitBtn = document.getElementById('submit');

var titleBook = document.getElementById('title');
var authorBook = document.getElementById('author');
var yearBook = document.getElementById('year');
var genreBook = document.getElementById('genre');

//create new object book
function NewBook(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

//appearance of the form when adding a new book
newBook.onclick = function() {
    newItemForm.style.display = "flex";
}

//close form for adding new book
closeFormBtn.onclick = function() {
    newItemForm.style.display = "none";
}

//create new book 
submitBtn.onclick = function() {
    let newBook = new NewBook(titleBook, authorBook, yearBook, genreBook);
}
