var newBook = document.getElementById('newBook'); //btn for add new book
var newItemForm = document.querySelector('.new-item-form'); //form of adding new book

var closeFormBtn = document.getElementById('closeBtn'); //btn for close form

//appearance of the form when adding a new book
newBook.onclick = function() {
    newItemForm.style.display = "flex";
}

closeFormBtn.onclick = function() {
    newItemForm.style.display = "none";
}
