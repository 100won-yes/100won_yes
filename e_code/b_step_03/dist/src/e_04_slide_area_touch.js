// e_04_slide_area_touch.js

// =================================================================
/* 전체 시나리오
    1. 터치 기반의 형식으로 광고 슬라이드 제작
    2. 마우스 기반의 드래그 형식의 슬라이드 제작
    3. slide 광고 틀 제작 (json 형식의 외부데이터 불러오기)
*/
// =================================================================
/*
  외부 데이터 불러와서 적용 (html - 임시)
*/
// =================================================================

// =================================================================

const path = "../temp/slide_area3.jsx";

const elViewBox = document.querySelector('#viewBox');
const elTitle = document.querySelector('head > title');


fetch(path) // elViewBox에 path문서 불러오기
.then((response) => response.text())
.then((data) => {
  elViewBox.innerHTML = data;
})
.then(() => { // css파일 html에 추가
  const linkCss = document.createElement("link");
  linkCss.setAttribute('rel', 'stylesheet');
  linkCss.setAttribute('href', '../css/src/e_04_slide_area_touch.css');
  elTitle.before(linkCss);
})
.then(() => { // 5번째 li를 복사해서 li의 맨 앞으로 붙여넣기
  const elViewWrap = elViewBox.querySelector('.view_wrap');
  const elViewLi = elViewWrap.querySelectorAll('li');
  const cloneEl = elViewLi[elViewLi.length -1].cloneNode(true); //true 없으면 안의 내용말고 tag만 불러옴
  elViewWrap.prepend(cloneEl);
  
  return [elViewWrap, elViewLi]; // const가 외부로 나갈 수 없어서 return으로 내보내기
})
.then((el) => {
  const elViewCon = elViewBox.querySelector('.view_content');
  elViewCon.style.overflowX = 'hidden';

  // 좌표 X의 이동점의 차이가 100px 이상 나면 해당하는 위치로 이동
  const pointer = {}; // {start:0, end:0, gap:0};
// 기능 추가 ------------------------------------------
  let SLIDE_COUNT = 0;
  let PERMISSION = true;
  let TIMED = 500;

  el[0].style.marginLeft = 0;
  el[0].style.position = 'relative';
  el[0].style.left = 0;
  el[0].style.transition = 'left ' + TIMED + 'ms linear';

  let conWidth = elViewCon.clientWidth;
  let leftData = parseInt(el[0].style.left);

  // console.log('width:', window.getComputedStyle(el[0].parentNode).width);
  // console.log('width:', el[0].parentNode.clientWidth);
  // * element.clientWidth : padding 포함한 width
  // * element.offsetWidth : padding + border 포함한 width
  // * element.getBoundingClientRect() : 외곽에 보이는 width
  


// 함수 -----------------------------------------------
// ? ?????????????????????????????????????????????????
  const fnSlideMove = () => {
    if (PERMISSION) {
      PERMISSION = false;
      if(pointer.gap >= 100 && SLIDE_COUNT < el[1].length -1) {
        SLIDE_COUNT +=1;
      } else if (pointer.gap <= -100 && SLIDE_COUNT > 0) {
        SLIDE_COUNT -=1;
      }
      el[0].style.left = -100 * SLIDE_COUNT + '%';
      setTimeout(() => {
        PERMISSION = true;
      }, TIMED)
    }
  };
// 이벤트 --------------------------------------------- 
  // touch 드래그 할 때의 좌표값을 계산
  elViewCon.addEventListener('touchstart', (e) => {
    console.log('시작점:', e.changedTouches[0].pageX);
    pointer.start = e.changedTouches[0].pageX;
    leftData = parseInt(el[0].style.left); // 기존 % 수치
  });

  elViewCon.addEventListener('touchmove', (e) =>{
    let _nowPointer = e.changedTouches[0].pageX;
    // el[0].style.left = -100 * SLIDE_COUNT + '%';
    // * 시작점 기준으로 움직인 값
    let _pointerMove = pointer.start - _nowPointer;

    // * 해당하는 움직인 값의 % 값 : 움직인 값 * 기준 / 100
    let movePer = parseInt(_pointerMove / conWidth * 100); //현재 움직인 값에 대한 % 위치
    

    el[0].style.left = (leftData - movePer) + '%'; //start 위치에서 움직인 만큼 화면이

  });

  elViewCon.addEventListener('touchend', (e) => {
    console.log('끝점:', e.changedTouches[0].pageX);
    pointer.end = e.changedTouches[0].pageX;
    
    pointer.gap = pointer.start - pointer.end;
    console.log(pointer);
    
    fnSlideMove();
  });
  
});

//? Q1 : 갭차이가 100이상 날 경우 그값이 음수이면 이전내용, 양수이면 다음 내용이 나타나게 만드시오.

// * 터치를 기반으로 처리하기
// * touchstart: 이벤트 핸들러 중 터치의 시작을 의미
// * touchmove : 이벤트 핸들러 중 터치를 이용하여 움직이는 상황
// * touchend : 이벤트 핸들러 중 터치의 끝을 의미
// * event.changedTouches[0] : 터치를 인식하여 좌표를 계산하는 위치
// * event.touch[0] : 터치를 인식하여 좌표를 계산하는 위치 touchend가 없음
// * 터치를 이용하여 좌표를 계산하는 기능 : clientX, screenX, pageX 가 존재 (Y좌표도 있음)
// * 대상의 위치를 기준으로 좌표를 계산(offsetX)하는 기능이 없음
// * 이에, 해당 요소의 위치를 파악하는 기능필요 : target.getBoundingClientRect().left | target.getBoundingClientRect().top

  //// elViewCon.addEventListener('touchstart', (e) => {
  ////   console.log(e.changedTouches[0].pageX);
  ////   console.log(e.touches[0].pageX);
  //// })
  //// elViewCon.addEventListener('touchmove', (e) => {
  ////   console.log(e.changedTouches[0].pageX);
  ////   console.log(e.touches[0].pageX);
  //// })
  //// elViewCon.addEventListener('touchend', (e) => {
  ////   console.log(e.changedTouches[0].pageX);
  ////   console.log(e.touches[0].pageX);
  //// }) // touchend에서 changeTouches만 작동함







// =================================================================










// =================================================================