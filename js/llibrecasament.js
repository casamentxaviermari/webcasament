$(document).ready(function(){
	/*Apliquem la llibreria turn*/
  	$('#wrapper_llibre').turn({
 	 	gradients: true, // mostra degradat i ombres durant a transició
 	 	autoCenter: true, // centra el flipbook depenent del número de pàgines visibles. L'autocenter canvia la propietat del CSS margin-left del flipbook.
 		width: 960, //canvia l'ample de la pàgina.
 	 	height: 400, //canvia l'alçada de la pàgina.
 		page:1, //moatra la pàgina actual del flipbook
 	 	acceleration: true // Canvia l'acceleració, per dispositius mobils aquest valors ha de ser true.
	});

	

})