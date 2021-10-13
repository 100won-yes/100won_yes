(function($){
  // console.log($.fn);
  // $('선택자')

  var nt = $('.next');
  var slideWrap = $('.slide_con_wrap');
  var div = slideWrap.children('div');
  var i = 0;

  // 버튼을 클릭할때마다 div의 i번째에 내용이 나타나게
  nt.click(function(){
    i += 1; //1씩 더하겠다.
    if(i >= 5){i = 0;} //i가 5보다 크거나 같으면 i를 0으로 다시 설정
    div.hide(); // div는 모두 숨겨라
    div.eq(i).show()}) // div중에 i번째는 나타나게 해라


})(jQuery);