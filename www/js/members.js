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

/*Validierung bei Klick auf Button "Erstellen"*/
function startValidation(){
	var element = document.getElementById("buttonCreate");
	element.onclick = validationMandatoryFields;
}

/*Validierung auf Pflichtfelder --> Funktioniert nicht! */
function validationMandatoryFields(){
	for (var i = 1; i <= 3; i++){
		var inputLength = document.form["input"].value;
		if (inputLength == ""){
			document.getElementsByTagName("input")[i].style.backgroundColor = "pink";
			alert("Pflichtfeld, bitte ausfüllen!").style.color = "red";
		}
	}
}

window.onload = startValidation;

