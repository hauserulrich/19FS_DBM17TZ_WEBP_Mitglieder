/**
 * initialisation of the dynamic part of the web site
 *
 */
$(document).ready(init);

/*Beim Klicken auf Feld, Farbe ändern - INIT Funktion an erster Stelle*/
function init(){
	$("input")
		.focus(enterFieldColor)
		.blur(leaveFieldColor);
}
/*Farbe von Feld ändert sich in grau wenn man in Feld klickt*/
function enterFieldColor(){
	$(this)
		.css("backgroundColor", "silver")
}

/*Farbe von Feld ändert sich in weiss wenn man Feld verlässt*/
function leaveFieldColor(){
	$(this)
		.css("backgroundColor", "white")
}


