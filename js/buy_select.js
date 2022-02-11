let selectDate = document.getElementById('DateBlock').querySelectorAll('.box'); //取得id為DateBlock下class為box的元素，若單純只寫document.querySelectorAll('.box')，時間選擇區塊叫box的class就會被取得，兩區塊選項會互相取消。
selectDate.forEach(function (item, i) {
  selectDate[i].addEventListener('click', function () {
    if (selectDate[i].classList.contains('checked')) {
      selectDate[i].classList.remove('checked');
    } else {
      selectDate.forEach(item => {
        item.classList.remove('checked');
      });
      selectDate[i].classList.add('checked');
    }
  });
});

let selectTime = document.getElementById('TimeBlock').querySelectorAll('.box'); //取得id為TimeBlock下class為box的元素
selectTime.forEach(function (item, i) {
  selectTime[i].addEventListener('click', function () {
    if (selectTime[i].classList.contains('checked')) {
      selectTime[i].classList.remove('checked');
    } else {
      selectTime.forEach(item => {
        item.classList.remove('checked');
      });
      selectTime[i].classList.add('checked');
    }
  });
});

let count = document.querySelectorAll('.count');
count.forEach(function (item, i) {
  count[i].addEventListener('click', function () {
    if (count[i].classList.contains('checked')) {
      count[i].classList.remove('checked');
    } else {
      count.forEach(item => {
        item.classList.remove('checked');
      });
      count[i].classList.add('checked');
    }
  });
});
