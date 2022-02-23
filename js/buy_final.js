let seat = document.querySelectorAll('.my_seat');
// let checked = 0;
let selected = document.getElementsByClassName('reset')[0];
let pay = document.getElementsByClassName('payment')[0];
let storage = localStorage;
// let seatArr = []; //已選座位陣列
let checkedCount = document.querySelectorAll('.checked'); //取得所有已選取的座位
let seatArr = Array.prototype.slice.call(checkedCount); //querySelectorAll出來是類陣列無法使用JS陣列方法，因此轉成陣列

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
      seatArr.splice(0, 1);
    } else if (seatArr.length < count) {
      seat[i].classList.add('checked');
      seatArr.push(seat[i]); //加入陣列
    } else if (seatArr.length == 1) {
      seat.forEach(item => {
        item.classList.remove('checked'); //一律全部清除選取樣式
        seatArr.splice(0, seatArr.length); //陣列清空
      });
      seat[i].classList.add('checked'); //該點選座位加入選取樣式
      seatArr.push(seat[i]); //座位加入陣列
    } else {
      if (seatArr.length == count) {
        //選滿狀態繼續點選會從陣列第一個刪除，再加入新點選座位
        seatArr[0].classList.remove('checked');
        seatArr.splice(0, 1);
      }
      seat[i].classList.add('checked');
      seatArr.push(seat[i]);
    }
  });
});

pay.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(seatArr);
  if (seatArr.length < count && seatArr.length > 0) {
    alert('幹還有' + (count - seatArr.length) + '位沒選啦87');
  } else if (seatArr.length == 0) {
    alert('幹都沒選是要跟鬼看逆');
  }
});

// selected.addEventListener('click', function () {
// storage.clear();
// });
