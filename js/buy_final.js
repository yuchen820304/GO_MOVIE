let seat = document.querySelectorAll('.my_seat');
let checked = 0;
let btn1 = document.getElementById('reset');
let storage = localStorage;

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

btn1.addEventListener('click', function () {
  storage.clear();
});
