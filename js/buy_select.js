let check = document.querySelectorAll('.box');
check.forEach(function (item, i) {
  check[i].addEventListener('click', function () {
    if (check[i].classList.contains('checked')) {
      check[i].classList.remove('checked');
    } else {
      check.forEach(function (item, i){
        check[i].classList.remove('checked');
      }
      check[i].classList.add('checked');
    }
  });
});

let count = document.querySelectorAll('.count');
count.forEach(function (item, i) {
  count[i].addEventListener('blur', function () {
    if (count[i].classList.contains('checked')) {
      count[i].classList.remove('checked');
    } else {
      count[i].classList.add('checked');
    }
  });
});
