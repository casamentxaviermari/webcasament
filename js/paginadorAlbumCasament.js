$(document).ready(function(){
	// alert('Hola');

	//Per centrar el paginador obtinc l'amplada del div paginador, multiplico l'ample del li per el número de pàgines i afegeixo l'ample dels li de previ i següent
	$('#paginador').append('<div id="paginador_llibre"><ul class="pagination pagination-sm"></ul></div>');
	var nav = $('#paginador_llibre');
	var paginas = parseInt($("#wrapper_llibre").turn("pages"));
	var ancho = (paginas*28) + 50;	
	$("#paginador").css('width', ancho + "px");

	//Afegeixo li per la pàgina prèvia
	$("#paginador_llibre ul").append('<li class="prev_page page-item dissabled"><a class="page-link bg-dark" href="#" tabindex="-1" aria-disabled="true">&lt;-</a></li>');

	//Amb un for afegirem un li per cadascuna de les pàgines
	for (var i=1;i<paginas+1;i++){ 
		$("#paginador_llibre ul").append('<li class="li_pagina page-item" id="pagina_'+i+'"><a href="#" class="page-link bg-dark" rel="'+i+'">'+i+'</a></li>');
	}

	//Afegeixo el li per la pagina següent
	$("#paginador_llibre ul").append('<li class="next_page page-item"><a href="#" class="page-link bg-dark">-&gt</a></li>');

	// funcions pròpies del paginador
	$(".li_pagina a").click(function(){
		var rel = $(this).attr("rel");
		$("#wrapper_llibre").turn("page", rel);
	});

	$(".prev_page a").click(function(){
		$("#wrapper_llibre").turn("previous");
	});

	$(".next_page a").click(function(){
		$("#wrapper_llibre").turn("next");
	});
	
	$("#wrapper_llibre").bind("turned", function(event, page, view) {
		$(".li_pagina").removeClass('active');
		$("#pagina_" + page).addClass('active');
		
		if (page%2==0 && page>1){
			var sig = parseInt(page)+1
			$("#pagina_" + sig).addClass('active');
		}else{
			var sig = parseInt(page)-1
			$("#pagina_" + sig).addClass('active');
		};
	});

	if ($("#wrapper_libro").turn("page")>=paginas) {	
		$("li.next_page").hide();	
	}else{
		$("li.prev_page").show();
	};
		
	
	
	if ( $("#wrapper_libro").turn("page")==1 ){
		$("#pagina_1").addClass('active');
	};

})