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
		.css("backgroundColor", "f5f5f5")
}

/*Farbe von Feld ändert sich in weiss wenn man Feld verlässt*/
function leaveFieldColor(){
	$(this)
		.css("backgroundColor", "white")
}

//Validierung bei PLZ (Noch nicht korrekt!!!)
function startValidation(){
	var eingabe = document.getElementById("plz");
	eingabe.addEventListener("blur", validation);
}

function validation(){
	var regEx = "^[0-9]{4}$";
	if (!this.value.match(regEx)){
		var response = document.getElementsByTagName("p");
		response[7].innerHTML += "<br>Bitte vierstellige Zahl";
		response[7].style.color ="red";
	} else {
		alert("hallo");
		//var response = document.getElementsByTagName("p");
		//response[7].innerHTML = "hallo";
	}
	this.onblur = startValidation;
}

window.onload = startValidation;

