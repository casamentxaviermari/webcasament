$(document).ready(function(){

	$("#jordiMontse").flip({
          axis: 'y',
          trigger: 'click',
          reverse: true
    });

    $("#OlgaPepArnau").flip({
          axis: 'y',
          trigger: 'click',
          reverse: true
    });
  
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