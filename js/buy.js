let movieName = document.querySelectorAll('.movie_name');
let list = document.querySelectorAll('.list');
let storage = localStorage;

list.forEach(function (item, i) {
  list[i].addEventListener('click', function (e) {
    storage.setItem('name', movieName[i].innerText);
  });
});
