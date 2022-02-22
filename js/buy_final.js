let seat = document.querySelectorAll('.my_seat');
let checked = 0;
let selected = document.getElementsByClassName('reset')[0];
let pay = document.getElementsByClassName('payment')[0];
let storage = localStorage;

let name = (document.getElementById('name').innerHTML =
  storage.getItem('name'));

let date = (document.getElementById('date').innerHTML = JSON.parse(
  storage.getItem('info'),
).month);

let type = (document.getElementById('type').innerHTML = JSON.parse(
  storage.getItem('info'),
).type);

let time = (document.getElementById('time').innerHTML = JSON.parse(
  storage.getItem('info'),
).time);

let count = (document.getElementById('count').innerHTML = JSON.parse(
  storage.getItem('info'),
).count);

// 座位選擇數判斷
seat.forEach(function (item, i) {
  seat[i].addEventListener('click', function () {
    if (seat[i].classList.contains('checked')) {
      seat[i].classList.remove('checked');
      checked = checked - 1;
    } else if (checked < count) {
      seat[i].classList.add('checked');
      checked = checked + 1;
    } else if (count == 1) {
      seat.forEach(item => {
        item.classList.remove('checked');
      });
      seat[i].classList.add('checked');
    } else {
      alert('超出人數啦幹白癡哦');
    }
  });
});

pay.addEventListener('click', function (e) {
  e.preventDefault();
  if (checked < count) {
    alert('幹還有' + (count - checked) + '位沒選啦87');
  }
});

// selected.addEventListener('click', function () {
// storage.clear();
// });
