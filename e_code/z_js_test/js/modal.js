// modal.js

var jsWrap = document.querySelector("#wrap");
var jsSmileBtn = jsWrap.querySelector(".smile");

var jsModal = document.querySelector("#modal");
var jsNone = document.querySelector(".none");
var jsModalArea = jsModal.querySelector(".modal_area");
var jsModalCloseBtn = jsModalArea.querySelector(".close_btn");
var jsModalBg = jsModal.querySelector(".modal_bg");

// 이미지 클릭시
function smileBtnClick(event) {
  event.preventDefault();
  jsModal.classList.remove("none");
};

jsSmileBtn.addEventListener("click", smileBtnClick);

// 취소 버튼 클릭시
function closeBtnClick(event) {
  event.preventDefault();
  jsModal.classList.add("none");
};

jsModalCloseBtn.addEventListener("click", closeBtnClick);

var modalBgO = jsModalBg.style.opacity;
var setO = 0;
modalBgO = setO;
console.log(modalBgO);
var opacityUp;

// for (let i = 0; i <= 100; i++) {
//   opacityUp = opacityUp + i;
// }

// console.log(opacityUp);
if(modalBgO <= 100) {

}