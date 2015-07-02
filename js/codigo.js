// JavaScript Document
function init()
{

	//$("#contenedor_principal").html("<img src='img/load.gif'>");

	$.post("http://sacyg.hol.es/php/platillos.php",{},function(data){
		
		$("#contenedor_principal").html(data);//AJAX:llenando contenedor 
		/*$( "#accordion" ).accordion();//JQUERY-UI: creando acordeon
		$(".mueve").draggable({//JQUERY-UI: poniendo propiedad draggable a elementos del menú
			helper:'clone',//JSON: clona el Item en el div destino
			appendTo:'body'//JSON: evita q el Item se deje caer en un lugar diferente al div especificado
		});*/
		/*$("#div_orden").droppable({//JQUERY-UI: poniendo prop droppable al div destino
			activeClass:'ui-state-default',//JSON: estilo del div destino al detectar movimiento
			hoverClass:'ui-state-hover',//JSON: estilo del div destino al paras un item sobre el
			drop:soltado//JSON: ejecuta la función 'soltado' al recibir un Item
		});*/
	});
}