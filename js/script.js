// jQueryの読み込みが終わったら実行
$(function () {
 $('.hamburger').click(function(){
  $(this).toggleClass('active');
  $('.menu').toggleClass('open');
  $('.overlay').toggleClass('open');
 });
 $('.overlay').click(function(){
  $('.hamburger').removeClass('active');
  $('.menu').removeClass('open');
  $(this).removeClass('open');
 });
});
