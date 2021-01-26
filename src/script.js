var item = document.getElementById('first-book');
var bookItems = document.getElementById('list-books');//list of all books
var items = []; //array for list of books
items.push(item);

var closeItem = document.getElementById('close-book');

var newBook = document.getElementById('newBook'); //btn for add new book
var newItemForm = document.querySelector('.new-item-form'); //form of adding new book
var bookDescr = document.querySelector('book-description');

var closeFormBtn = document.getElementById('closeBtn'); //btn for close form
var submitBtn = document.getElementById('submit'); //btn for adding new book


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

closeItem.onclick = function(event) {//to do
    let target = event.target;
   
    if (target.classList.contains("close-item")) {
        
    }
}

item.onclick = function(event) { //to do
    let target = event.target;

    if (target.classList.contains("btn-edit")) {
        
    }
}

//create new book 
submitBtn.onclick = function() {
   
    //create new obj of book
    let newBook = new NewBook(titleBook, authorBook, yearBook, genreBook);//create new js object
    items.push(newBook);

    //create html code for new book
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.classList.add('container-items');

    let newClose = document.createElement('a');
    newClose.classList.add('close');
    newClose.classList.add('close-item');
    newClose.textContent = 'X';
    newClose.href = "#";

    let newImg = document.createElement('img');
    newImg.classList.add('item-img');
    newImg.src = 'https://img3.labirint.ru/rc/e327455f841e177d148461cc417f8a0c/220x340/books71/701601/cover.jpg?1564208325';
    //newImg.src = imgBook.value;
    //imgBook.value = "";

    let newBookDescr = document.createElement('div');
    newBookDescr.classList.add('book-description');
 
    let newBookTitle = document.createElement('p');
    newBookTitle.textContent = 'Муми Тролль';
    //newBookTitle.textContent = titleBook.value; 
    newBookTitle.classList.add('name-book'); 
    newBookTitle.style.color = '#000000';
    //titleBook.value = "";

    let newBookAuthor = document.createElement('p');
    newBookAuthor.classList.add('author-book');
    newBookAuthor.textContent = 'Туве Янсон';
    //newBookAuthor.textContent = authorBook.value;
    newBookAuthor.style.color = '#000000';
    //authorBook.value = "";

    let newBookYear = document.createElement('p');
    newBookYear.classList.add('year-book');
    newBookYear.textContent = 'Год издания: 1977';
    //newBookYear.textContent = `Год издания:${yearBook.value}`;
    newBookYear.style.color = '#000000';
    //yearBook.value = "";

    let newBookGenre = document.createElement('p');
    newBookGenre.classList.add('genre-book');
    newBookGenre.textContent = 'Жанр: детская литература';
    //newBookGenre.textContent =`Жанр:${genreBook.value}`;
    newBookGenre.style.color = '#000000';
    //genreBook.value = "";

    let newButton = document.createElement('a');
    newButton.classList.add('btn');
    newButton.textContent = 'Редактировать';

    //create item with book
   
    newItem.appendChild(newImg);
    newItem.appendChild(newBookDescr);
    newBookDescr.appendChild(newClose);
    newBookDescr.appendChild(newBookTitle);
    newBookDescr.appendChild(newBookAuthor);
    newBookDescr.appendChild(newBookYear);
    newBookDescr.appendChild(newBookGenre);
    newBookDescr.appendChild(newButton);

    //insert new html code in admin-page.html
    bookItems.insertBefore(newItem, item); 
    //close form
    newItemForm.style.display = "none";
    
    }
