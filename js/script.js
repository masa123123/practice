
//ハンバーガー
$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.header-inner').fadeToggle(500);
  //  $('body').toggleClass('noscroll');
});

//ドロップダウン
$(function(){
  $('.dropdwn li').hover(function(){
    $("ul:not(:animated)", this).slideDown(); //隠しているやつを下にスライド
  }, function(){
    $("ul.dropdwn_menu",this).slideUp();
  });
});
