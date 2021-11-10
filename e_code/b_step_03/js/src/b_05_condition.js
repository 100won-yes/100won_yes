// b_05_js_condition.js
// 문법


/*
switch (매개변수) {
  case 조건값 :
    조건값과 매개변수가 일치하면 수행
  break;
  case 조건값2 :
    조건값과 매개변수가 일치하면 수행
  break;
  default :
    위 조건들이 일치하지 않으면 수행
}
*/

var rel = true;
var d = [];

switch (rel) {
  case true :
    d.push('true 1');
    break;
  case false : 
    d.push('false 1');
    break;
  default :
    d.push('end');
}

console.log(d);