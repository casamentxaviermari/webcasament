$(document).ready(function(){
	// accedim al botó a través de la classe anar-amunt i quan es cliqui farà que puji a l'inici de la pàgina 
	$('.anar-amunt').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300); //controlem la velocitat que puja en ms
	});

	// Quan l'usuari faci scroll apareixerà l'span per pujar cap amunt
	$(window).scroll(function(){
		if($(this).scrollTop() > 0 ){
			$('.anar-amunt').slideDown(300);
		}else{
			$('.anar-amunt').slideUp(300);
		}
	});
});