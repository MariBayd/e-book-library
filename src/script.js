var item = document.querySelector('item');
var bookItems = document.querySelector('book-items');

var newBook = document.getElementById('newBook'); //btn for add new book
var newItemForm = document.querySelector('.new-item-form'); //form of adding new book

var closeFormBtn = document.getElementById('closeBtn'); //btn for close form

var submitBtn = document.getElementById('submit');

//get elemets from html
var titleBook = document.getElementById('title');
var authorBook = document.getElementById('author');
var yearBook = document.getElementById('year');
var genreBook = document.getElementById('genre');
var imgBook = document.getElementById("book-cover");

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
    //create new obj of book
    let newBook = new NewBook(titleBook, authorBook, yearBook, genreBook);//create new js object

    //create html code for new book
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.classList.add('container-items');
    
    let newImg = document.createElement('img');
    newImg.classList.add('item-img');
    newImg.src = imgBook.value;
    imgBook.value = "";

    let bookDescr = document.createElement('div');
    bookDescr.classList.add('book-description');
 
    let newBookTitle = document.createElement('p');
    newBookTitle.textContent = titleBook.value; 
    newBookTitle.classList.add('name-book'); 
    newBookTitle.style.color = '#000000';
    titleBook.value = "";

    let newBookAuthor = document.createElement('p');
    newBookAuthor.classList.add('author-book');
    newBookAuthor.textContent = authorBook.value;
    newBookAuthor.style.color = '#000000';
    authorBook.value = "";

    let newBookYear = document.createElement('p');
    newBookYear.classList.add('year-book');
    newBookYear.textContent = `Год издания:${yearBook.value}`;
    newBookYear.style.color = '#000000';
    yearBook.value = "";

    let newBookGenre = document.createElement('p');
    newBookGenre.classList.add('genre-book');
    newBookGenre.textContent =`Жанр:${genreBook.value}`;
    newBookGenre.style.color = '#000000';
    genreBook.value = "";

    let newButton = document.createElement('a');
    newButton.classList.add('btn-edit');
    newButton.textContent = 'Редактировать';

    //create item with book
    newItem.appendChild(newImg);
    newItem.appendChild(bookDescr);
    bookDescr.appendChild(newBookTitle);
    bookDescr.appendChild(newBookAuthor);
    bookDescr.appendChild(newBookYear);
    bookDescr.appendChild(newBookGenre);
    bookDescr.appendChild(newButton);

    //insert new html code in admin-page.html
    document.body.insertBefore(newItem, item); 
    //close form
    newItemForm.style.display = "none";
    
    }
