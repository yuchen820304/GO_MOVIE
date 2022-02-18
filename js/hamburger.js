// 漢堡選單控制
let btn = document.getElementsByClassName('menu_btn')[0];
let hamburger = document.getElementsByClassName('hamburger')[0];

btn.addEventListener('click', function (e) {
  if (hamburger.style.transform == 'translateX(0%)') {
    window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
    hamburger.style.transform = 'translateX(-100%)';
    hamburger.style.transition = '.3s'; //若在CSS設定transition會造成重整時選單會依動畫設定秒數重跑到初始位置，形成瞬間出現選單又消失的情況
  } else {
    hamburger.style.transform = 'translateX(0%)';
    hamburger.style.transition = '.3s';
  }
});

// 點擊任何地方關閉漢堡選單
document.addEventListener(
  'click',
  function () {
    hamburger.style.transform = 'translateX(-100%)';
  },
  true,
);
