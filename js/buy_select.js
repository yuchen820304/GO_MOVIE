let info = {
  month: '',
  type: '',
  time: '',
  count: '',
};
//選擇資訊
let innerMonth = document.getElementById('selectDay');
let innerTime = document.getElementById('selectTime');
let innerCount = document.getElementById('selectCount');
let innerType = document.getElementById('selectType');
let storage = localStorage;

// 日期選擇
let selectDate = document.getElementById('DateBlock').querySelectorAll('.box'); //取得id為DateBlock下class為box的元素，若單純只寫document.querySelectorAll('.box')，時間選擇區塊叫box的class就會被取得，兩區塊選項會互相取消。
selectDate.forEach(function (item, i) {
  selectDate[i].addEventListener('click', function () {
    if (selectDate[i].classList.contains('checked')) {
      selectDate[i].classList.remove('checked'); //已選取時再點擊取消選取
      innerMonth.classList.remove('current'); //移除該欄位current的class移除CSS樣式
      innerMonth.innerHTML = ''; //資訊欄清空
      info.month = '';
      storage.setItem('info', JSON.stringify(info)); //清除localStorage的month
    } else {
      selectDate.forEach(item => {
        //點擊時讓所有選項取消選取
        item.classList.remove('checked');
        // info.splice(0);
      });
      selectDate[i].classList.add('checked'); //再讓被點擊的那個選項被選取
      let choose = document.getElementsByClassName('month')[i].innerText; //取得所選日期標籤內容
      let day = document.getElementsByClassName('day')[i].innerText; //取得所選星期幾標籤內容
      info.month = choose;
      console.log(info);
      innerMonth.innerHTML = choose + ' ' + day; //在標籤新增所選中的選項文字
      innerMonth.classList.add('current'); //在標籤新增class:current套上CSS
      storage.setItem('info', JSON.stringify(info)); //加到localStorage
    }
  });
});

// 電影播放類型選擇
let type = document.getElementById('chooseKind').querySelectorAll('.type');
let line = document.querySelector('.line');

//預設數位先選取
let typeSelected = document.getElementsByClassName('type')[0].innerText;
type[0].classList.add('checked');
innerType.classList.add('current');
innerType.innerHTML = typeSelected;

type.forEach(function (item, i) {
  type[i].addEventListener('click', function () {
    if (type[i].classList.contains('checked')) {
      type[i].classList.remove('checked'); //已選取時再點擊取消選取
      line.style.transform = 'translateX(0%)';
      line.style.display = 'none';
      innerType.classList.remove('current'); //移除該欄位current的class移除CSS樣式
      innerType.innerHTML = ''; //資訊欄清空
      info.type = '';
      storage.setItem('info', JSON.stringify(info)); //清除localStorage的type
    } else {
      type.forEach(item => {
        item.classList.remove('checked'); //點擊時讓所有選項取消選取
      });
      type[i].classList.add('checked'); //再讓被點擊的那個選項被選取
      let typeSelected = document.getElementsByClassName('type')[i].innerText; //取得所選類型標籤內容
      info.type = typeSelected;
      storage.setItem('info', JSON.stringify(info));

      switch (typeSelected) {
        case '數位':
          line.style.display = 'block';
          line.style.transform = 'translateX(0%)';
          break;
        case '3D':
          line.style.display = 'block';
          line.style.transform = 'translateX(100%)';
          break;
        case 'IMAX':
          line.style.display = 'block';
          line.style.transform = 'translateX(200%)';
          break;
        default:
          break;
      }
      innerType.innerHTML = typeSelected; //在標籤新增所選中的選項文字
      innerType.classList.add('current'); //在標籤新增class:current套上CSS
    }
  });
});

// 電影時間選擇
let selectTime = document.getElementById('TimeBlock').querySelectorAll('.box'); //取得id為TimeBlock下class為box的元素
selectTime.forEach(function (item, i) {
  selectTime[i].addEventListener('click', function () {
    if (selectTime[i].classList.contains('checked')) {
      selectTime[i].classList.remove('checked');
      innerTime.classList.remove('current');
      innerTime.innerHTML = '';
      info.time = '';
      storage.setItem('info', JSON.stringify(info));
    } else {
      selectTime.forEach(item => {
        item.classList.remove('checked');
      });
      selectTime[i].classList.add('checked');
      let time = document.getElementsByClassName('time')[i].innerText;
      innerTime.innerHTML = time;
      innerTime.classList.add('current');
      info.time = time;
      storage.setItem('info', JSON.stringify(info));
    }
  });
});

// 訂票人數選擇
let count = document.querySelectorAll('.count');
count.forEach(function (item, i) {
  count[i].addEventListener('click', function () {
    if (count[i].classList.contains('checked')) {
      count[i].classList.remove('checked');
      innerCount.classList.remove('current');
      innerCount.innerHTML = '';
      info.count = '';
      storage.setItem('info', JSON.stringify(info));
    } else {
      count.forEach(item => {
        item.classList.remove('checked');
      });
      count[i].classList.add('checked');
      let person = document.getElementsByClassName('count')[i].innerText;
      innerCount.innerHTML = person + '人';
      innerCount.classList.add('current');
      info.count = person;
      storage.setItem('info', JSON.stringify(info));
    }
  });
});
