// Initialisierung wenn Dokument fertig geladen ist
$(document).ready(init);

// Beim Klicken auf Feld, Farbe ändern - INIT Funktion an erster Stelle
function init(){
	$("input")
		.focus(enterFieldColor)
		.blur(leaveFieldColor);
}
// Farbe von Feld ändert sich in grau wenn man in Feld klickt
function enterFieldColor(){
	$(this)
		.css("backgroundColor", "f5f5f5");
}

// Farbe von Feld ändert sich in weiss wenn man Feld verlässt
function leaveFieldColor(){
	$(this)
		.css("backgroundColor", "white");
}

// Validierung beim Nachname
function nachNaValidation(){
	var regEx = "^[a-z]+$";
	var nachNaEingabe = document.getElementById("nachname");
	if (!nachNaEingabe.value.match(regEx)){
		nachNaEingabe.style.color ="red";
		alert("Es dürfen keine Zahlen eingegeben werden");
	} else {
		nachNaEingabe.style.color ="black";
	}
}

// Validierung beim Vornamen
function vorNaValidation(){
	var regEx = "^[a-z]+$";
	var vorNaEingabe = document.getElementById("vorname");
	if (!vorNaEingabe.value.match(regEx)){
		vorNaEingabe.style.color ="red";
		alert("Es dürfen keine Zahlen eingegeben werden");
	} else {
		vorNaEingabe.style.color ="black";
	}
}

// Validierung bei der Strasse 
function strasseValidation(){
	var regEx = "^[a-z]+$";
	var strasseEingabe = document.getElementById("strasse");
	if (!strasseEingabe.value.match(regEx)){
		strasseEingabe.style.color ="red";
		alert("Es dürfen keine Zahlen eingegeben werden");
	} else {
		strasseEingabe.style.color ="black";
	}
}

// Validierung bei StrassenNummer
function strNuValidation(){
	var regEx = "^[0-9]{3}$";
	var strNuEingabe = document.getElementById("strassennummer");
	if (!strNuEingabe.value.match(regEx)){
		strNuEingabe.style.color ="red";
		alert("Bitte Zahl eingeben");
	} else {
		strNuEingabe.style.color ="black";
	}
}

// Validierung bei PLZ
function plzValidation(){
	var regEx = "^[0-9]{4}$";
	var plzEingabe = document.getElementById("plz");
	if (!plzEingabe.value.match(regEx)){
		plzEingabe.style.color ="red";
		alert("Bitte vierstellige Zahl eingeben");
	} else {
		plzEingabe.style.color ="black";
	}
}

// Validierung bei Ort
function ortValidation(){
	var regEx = "^[a-z]+$";
	var ortEingabe = document.getElementById("ort");
	if (!ortEingabe.value.match(regEx)){
		ortEingabe.style.color ="red";
		alert("Es dürfen keine Zahlen eingegeben werden");
	} else {
		ortEingabe.style.color ="black";
	}
}


