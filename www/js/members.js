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
	var regEx = "^[a-zA-Z]+$";
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
	var regEx = "^[a-zA-Z]+$";
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
	var regEx = "^[a-zA-Z]+$";
	var strasseEingabe = document.getElementById("strasse");
	if (!strasseEingabe.value.match(regEx)){
		strasseEingabe.style.color ="red";
		alert("Es dürfen keine Zahlen eingegeben werden");
	} else {
		strasseEingabe.style.color ="black";
	}
}

// Validierung bei StrassenNummer 
// Braucht es nicht, da es auch 5B sein kann
/*function strNuValidation(){
	var regEx = "^\d+[a-zA-Z]*$";
	var strNuEingabe = document.getElementById("strassennummer");
	if (!strNuEingabe.value.match(regEx)){
		strNuEingabe.style.color ="red";
		alert("Bitte Zahl eingeben");
	} else {
		strNuEingabe.style.color ="black";
	}
}*/

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
	var regEx = "^[a-zA-Z]+$";
	var ortEingabe = document.getElementById("ort");
	if (!ortEingabe.value.match(regEx)){
		ortEingabe.style.color ="red";
		alert("Es dürfen keine Zahlen eingegeben werden");
	} else {
		ortEingabe.style.color ="black";
	}
}

function createMember(){
	var member = new Object();
	member.nachname = document.querySelector("#nachname").value;
	member.vorname = document.querySelector("#vorname").value;
	member.geburtsdatum = document.querySelector("#geburtsdatum").value;
	member.strasse = document.querySelector("#strasse").value;
	member.strassennummer = document.querySelector("#strassennummer").value;
	member.plz = document.querySelector("#plz").value;
	member.ort = document.querySelector("#ort").value;
	member.vereinsposition = document.querySelector("#vereinsposition").value;
	member.grad = document.querySelector("#grad").value;
	member.klassifizierung = document.querySelector("#klassifizierung").value;
	member.eintritt = document.querySelector("#eintritt").value;
	member.austritt = document.querySelector("#austritt").value;
	member.von_dat = document.querySelector("#von_dat").value;
	member.bis_dat = document.querySelector("#bis_dat").value;
	member.erstellt = document.querySelector("#erstellt").value;
	member.aktiv = document.querySelector("#aktiv").value;
	console.log(member);
	console.log(member.vorname);
	var string = ".php?nachname=" + member.nachname + "&vorname=" + member.vorname + "&geburtsdatum=" + member.geburtsdatum + "&strasse=" + member.strasse + "&strassennummer=" + member.strassennummer + "&plz=" + member.plz + "&ort=" + member.ort + "&vereinsposition=" + member.vereinsposition + "&grad=" + member.grad + "&klassifizierung=" + member.klassifizierung + "&eintritt=" + member.eintritt + "&austritt=" + member.austritt + "&von_dat=" + member.von_dat + "&bis_dat=" + member.bis_dat + "&erstellt=" + member.erstellt + "&aktiv=" + member.aktiv;
	console.log(string);
}




