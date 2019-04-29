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
	member.m_id = document.querySelector("#m_id").value;
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
	var string = ".php?m_id=" + member.m_id + "&nachname=" + member.nachname + "&vorname=" + member.vorname + "&geburtsdatum=" + member.geburtsdatum + "&strasse=" + member.strasse + "&strassennummer=" + member.strassennummer + "&plz=" + member.plz + "&ort=" + member.ort + "&vereinsposition=" + member.vereinsposition + "&grad=" + member.grad + "&klassifizierung=" + member.klassifizierung + "&eintritt=" + member.eintritt + "&austritt=" + member.austritt + "&von_dat=" + member.von_dat + "&bis_dat=" + member.bis_dat + "&erstellt=" + member.erstellt + "&aktiv=" + member.aktiv;
	console.log(string);
}

//* Funktion für Datum, Stunden und Minuten werden weggeschnitten
function dateConversion(dateDelivery){
	dateDelivery = dateDelivery.slice(0,10);
	console.log(dateDelivery);
	return dateDelivery;
}

//* Funktion für Checkbox "Aktiv"
function activeValidation(checkbox) {
	if (checkbox == "1") {
    	document.getElementById("aktiv").checked = true;
	}
	else{
		document.getElementById("aktiv").checked = false;
	}
}

//*Aufruf zur Datenbank und holt (zukünftig) Single Record via JSON
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
//*ReadyState 4 = Operation Complete (wenn fertig geladen), Status 200 = HTTP verfügbar (OK)
  if (this.readyState == 4 && this.status == 200) {
    getMember = JSON.parse(this.responseText);
    console.log(getMember[0].nachname);
    document.getElementById("m_id").value = getMember[0].m_id;
    document.getElementById("nachname").value = getMember[0].nachname;
    document.getElementById("vorname").value = getMember[0].vorname;
    document.getElementById("geburtsdatum").value = getMember[0].geburtsdatum;
    document.getElementById("strasse").value = getMember[0].strasse;
    document.getElementById("strassennummer").value = getMember[0].strnummer;
    document.getElementById("plz").value = getMember[0].plz;
    document.getElementById("ort").value = getMember[0].ort;
    document.getElementById("vereinsposition").value = getMember[0].vereinsposition;
    document.getElementById("grad").value = getMember[0].grad;
    document.getElementById("klassifizierung").value = getMember[0].klassifizierung;
    document.getElementById("eintritt").value = getMember[0].eintritt;
    document.getElementById("austritt").value = getMember[0].austritt;
    document.getElementById("von_dat").value = getMember[0].von_dat;
    document.getElementById("bis_dat").value = getMember[0].bis_dat;
    document.getElementById("erstellt").value = dateConversion(getMember[0].erstellt);
    document.getElementById("aktiv").value = activeValidation(getMember[0].aktiv);
  }
};
xmlhttp.open("GET", "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/all.php", true);
xmlhttp.send();






