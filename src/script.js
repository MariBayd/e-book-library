var newBook = document.getElementById('newBook');
var newItemForm = document.querySelector('.new-item-form');

//appearance of the form when adding a new book
newBook.onclick = function() {
    newItemForm.style.display = "flex";
}
