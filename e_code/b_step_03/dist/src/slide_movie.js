// slide_movie.js

// ================================================================
// * 시나리오 1

// * 1. 다음버튼 클릭 시 첫 요소가 마지막으로 이동

// ================================================================

// * 변수

const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
const elModal = elViewBox.querySelector('.modal_area');
const elMovie = elModal.querySelector('.movie');
const elModalClose = elModal.querySelector('.modal_close > button');

let elSlideLi = elSlideWrap.querySelectorAll('li');

let elSlide = [...elSlideLi];
let PERMISSION = true;
// elViewBox.style.overflowX = 'hidden';
let dbVideoData = [];
let videoCode = (fileName, type = 'mp4') => {
  return `<video controls autoplay muted preload>
            <source src="${fileName}" type="video/${type}" />
          </video>`
};
// ================================================================

elSlide.forEach((el,idx) => {
  el.setAttribute('data-num',idx);
});

const path = "../data/video_modal.json";
fetch(path)
.then(response => response.json())
.then((data) => {
  dbVideoData = [...data];
  elSlide.forEach((el,idx) => {
    el.setAttribute('data-num',dbVideoData[idx].id);
  });
});

// ================================================================

/*
const fnSlideMove = () => {
// const elSlideArr = [].slice.call(elSlideLi);
let elSlide = [...elSlideLi];
elSlideWrap.prepend(elSlide.at(-1));
// * 맨 뒤의 li를 맨 앞으로 잘라서 붙여넣기
elSlideLi = elSlideWrap.querySelectorAll('li');
};

const fnSlideMove2 = () => {
  // const elSlideArr = [].slice.call(elSlideLi);
  let elSlide = [...elSlideLi];
  elSlideWrap.append(elSlide.at(0));
  elSlideLi = elSlideWrap.querySelectorAll('li');
  };

// * 이벤트
elSlideBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let target = (name) => e.target.classList.contains(name);
  // contains 는 ()의 유무 판단
  if(target('next')) {
    // '.next' 버튼 클릭시 기능 수행
    console.log('next버튼 클릭시')
    fnSlideMove2();
  } else {
    // '.prev' 버튼 클릭시 기능 수행
    console.log('prev버튼 클릭시')
    fnSlideMove();
  }
});
*/

// ================================================================
// * 위 코드 줄이기

const fnSlideMove = (e) => {
  e.preventDefault();
  if(PERMISSION) {
    PERMISSION = false;
    let target = e.target.classList.contains('prev');
    elSlide = [...elSlideLi];
    (target) ? 
      elSlideWrap.prepend(elSlide.at(-1)) : 
      elSlideWrap.append(elSlide.at(0));

    elSlideLi = elSlideWrap.querySelectorAll('li');
    setTimeout(() => {PERMISSION = true;},500);
  }
};


elSlideWrap.prepend(elSlide.at(-1)); 
elSlideWrap.prepend(elSlide.at(-2));
elSlideLi = elSlideWrap.querySelectorAll('li');

// * 이벤트

  elSlideBtn.addEventListener('click', fnSlideMove);


  elSlideWrap.addEventListener('click', e => {
    e.preventDefault();
    let el = e.target;
    let selectData;
    if(el.tagName.toLowerCase() === 'button'){
      let num = el.parentNode.getAttribute('data-num');
      
      // * 필요한 data 찾아오기
      selectData = dbVideoData.filter((data) => data.id === parseInt(num));
      // console.log(selectData[0].file);

      let src = `../multi/video/${selectData[0].file}.mp4`;
      elMovie.innerHTML = videoCode(src);

      elModal.classList.add('on');
      elModalClose.focus();
    };
  });


  // elSlideLi.forEach((el,idx) => {
  //   el.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     let num = el.getAttribute('data-num')
  //     console.log(num);
  //   });
  // });

  elModalClose.addEventListener('click', (e) => {
    e.preventDefault();
    elModal.classList.remove('on');
    elMovie.children[0].remove();
  });
// ================================================================
// * 이벤트 위임 : 실제로 클릭해야하는 요소가 아닌 그 부모에서 클릭했을 경우 해당하는 요소가 반응 할 수 있도록 인식
// * 버블링 : 부모에게 전달, 캡쳐링 : 자식에게 전달
// ================================================================

// * li 클릭시 해당하는 내용에 맞는 영상을 모달창에 띄워 처리

// * e.target.tagName.toLowerCase() : 이벤트 처리된.타겟의.요소이름.소문자로 처리()

