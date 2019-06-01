$(function(){
	$('.caminada .contenidor-imatge').on('click', function(){
		$('#imatgeModal').modal;

		// agafem la ruta de la imatge que hem clicat
		var ruta_imatge = ($(this).find('img').attr('src'));
		$('#imatgeModal').attr('src', ruta_imatge);

	});
})