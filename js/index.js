let poster = document
  .getElementsByClassName('poster')[0]
  .querySelectorAll('li');
let changeBtn = document.getElementsByTagName('h2')[0];
let a = Array.prototype.slice.call(poster);
let i = poster.length - 1;
let root = document.querySelector('.poster');
let change = document
  .getElementsByClassName('poster')[0]
  .querySelectorAll('img');

changeBtn.addEventListener('click', function () {
  if (i > -1) {
    root.removeChild(a[i]);
    root.insertBefore(a[i], a[0]);
    i--;
  }
  if (i == 0) {
    i = 1;
    console.log('aa');
  }
});
