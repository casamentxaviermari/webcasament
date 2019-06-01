$(document).ready(function(){
  corHover();
  
});

function corHover(){
	$(".img-cor").hover(
  function () {
    $(this).addClass('animated');
    $(this).addClass('infinite');
    $(this).addClass('pulse');
  }, 
  function () {
    $(this).removeClass('animated');
    $(this).removeClass('infinite');
    $(this).removeClass('pulse');
  }
  );
 }