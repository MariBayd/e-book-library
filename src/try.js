let newP = document.createElement('p');
newP.textContent = 'p';
let curP = document.getElementById('title');
let parent = curP.parentNode;

let btn = document.getElementById('btn');


btn.onclick = function() {
  document.body.insertBefore(newP, curP);
}




