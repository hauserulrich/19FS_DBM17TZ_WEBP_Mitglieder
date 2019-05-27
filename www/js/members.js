// -------------------------------------------------- //
// Initializing as soon as document has been loaded	  //
// -------------------------------------------------- //
$(document).ready(init);

function init() {
	$("input")
		.focus(enterFieldColor)
		.blur(leaveFieldColor);
	// get member id from url
	var url = new URL(window.location);
	var m_id = url.searchParams.get("m_id");
	// console.log(m_id);
	if (m_id != null) { // if m_id exists the user is already in DB
		getSingleMember(m_id); // gets data from db for concerning user
	}
}

// -------------------------------------------------- //
// Load a single Member from Database				  //
// -------------------------------------------------- //
// Calls API and gets Single Record from db within JSON
function getSingleMember(m_id) {
	var xmlhttp = new XMLHttpRequest();
	// concatinate der URL
	var getMemberUrl = "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/getmember.php?m_id="+m_id+""; // m_id is provided by INIT
	// call API
	xmlhttp.open("GET", getMemberUrl, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
			// ReadyState 4 = Operation Complete (loading finished), Status 200 = HTTP ready (OK), [0] is always the first entry
  			if (this.readyState === 4 && this.status === 200) {
   				getMember = JSON.parse(this.responseText);
   				console.log(getMember[0].nachname);
   				document.getElementById("m_id").value = getMember[0].m_id;
   				document.getElementById("nachname").value = getMember[0].nachname;
   				document.getElementById("vorname").value = getMember[0].vorname;
   				document.getElementById("geburtsdatum").value = getMember[0].geburtsdatum;
   				document.getElementById("strasse").value = getMember[0].strasse;
   				document.getElementById("strnummer").value = getMember[0].strnummer;
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
	}
}

// -------------------------------------------------- //
// Delete a single Member from Database				  //
// -------------------------------------------------- //
// deletes member from database
function deleteMember() {
	// define destination API on server
	var serverDestination = "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/deletemember.php";
	// get m_id if existing
	memberId = document.querySelector("#m_id").value;
	// if m_id is not null, bring a pop up to verify and delete entry on db
	if (memberId === "") {
		// if member does not exist, ask for flushing form in gui or cancel action
		information = "The User does already exists in DB.\n Should the form be deleted?";
		if (confirm(information)) {
			document.getElementById("memberform").reset();
		}
	} else {
		information = "User with the ID "+memberId+" will be deleted.";
		if (confirm(information)) {
			var deleteMemberUrl = serverDestination + "?m_id=" + memberId ;
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("GET", deleteMemberUrl, true);
			xmlhttp.send();
			document.getElementById("memberform").reset();
			//inform user about deletion and flush form in gui
			information = "User with the ID "+memberId+" has been deleted.";
			window.alert(information);
		}
	}
}	

// -------------------------------------------------- //
// Create a new Member in Database					  //
// -------------------------------------------------- //
// The function creates a new or updates a member. Decision is by existing m_id or not
function createMember() {
	// console.log("Create a Member");
	var member = new Object();
	// fill object member with form 
	member.m_id = document.querySelector("#m_id").value;
	// console.log("Member ID: "+member.m_id);
	member.nachname = document.querySelector("#nachname").value;
	member.vorname = document.querySelector("#vorname").value;
	member.geburtsdatum = document.querySelector("#geburtsdatum").value;
	member.strasse = document.querySelector("#strasse").value;
	member.strnummer = document.querySelector("#strnummer").value;
	member.plz = document.querySelector("#plz").value;
	member.ort = document.querySelector("#ort").value;
	member.vereinsposition = document.querySelector("#vereinsposition").value;
	member.grad = document.querySelector("#grad").value;
	member.klassifizierung = document.querySelector("#klassifizierung").value;
	member.eintritt = document.querySelector("#eintritt").value;
	member.austritt = document.querySelector("#austritt").value;
	member.von_dat = document.querySelector("#von_dat").value;
	member.bis_dat = document.querySelector("#bis_dat").value;
	member.erstellt = dateConversion(document.querySelector("#erstellt").value);
	member.aktiv = document.querySelector("#aktiv").value;
	// console.log(member);
	// console.log(member.vorname);
	var serverDestination = "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/setmember.php";
	// decision if it is an existing user or not. If it is an existing user the calling URL will be increased with m_id
	if (member.m_id === "") {	
		//console.log("New member");
		var setMemberUrl = "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/setmember.php" + "?nachname=" + member.nachname + "&vorname=" + member.vorname + "&geburtsdatum=" + member.geburtsdatum + "&strasse=" + member.strasse + "&strnummer=" + member.strnummer + "&plz=" + member.plz + "&ort=" + member.ort + "&vereinsposition=" + member.vereinsposition + "&grad=" + member.grad + "&klassifizierung=" + member.klassifizierung + "&eintritt=" + member.eintritt + "&austritt=" + member.austritt + "&von_dat=" + member.von_dat + "&bis_dat=" + member.bis_dat + "&erstellt=" + member.erstellt + "&aktiv=" + member.aktiv;
	} else {
		//console.log("Existing Member");
		var setMemberUrl = "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/setmember.php" + "?m_id=" + member.m_id + "&nachname=" + member.nachname + "&vorname=" + member.vorname + "&geburtsdatum=" + member.geburtsdatum + "&strasse=" + member.strasse + "&strnummer=" + member.strnummer + "&plz=" + member.plz + "&ort=" + member.ort + "&vereinsposition=" + member.vereinsposition + "&grad=" + member.grad + "&klassifizierung=" + member.klassifizierung + "&eintritt=" + member.eintritt + "&austritt=" + member.austritt + "&von_dat=" + member.von_dat + "&bis_dat=" + member.bis_dat + "&erstellt=" + member.erstellt + "&aktiv=" + member.aktiv;
	}
	// console.log(setMemberUrl);
	// prepare API call
	var xhr = new XMLHttpRequest(), method = 'GET', url = setMemberUrl;
	//console.log('UNSENT', xhr.readyState); // readyState will be 0
	// open connection to server
	xhr.open('GET', setMemberUrl, false);
	//console.log('OPENED', xhr.readyState); // readyState will be 1
	xhr.onprogress = function () {
	    console.log('LOADING', xhr.readyState); // readyState will be 3
	};
	xhr.onload = function () {
	    console.log('DONE', xhr.readyState); // readyState will be 4
	};
	//window.setTimeout(createMember(), 50000);
	// send request to API
	xhr.send(null);
	// if ReadyState changes grep the result and open POP-UP
	xhr.onreadystatechange = function() {
		// ReadyState 4 = Operation Complete (loading finished), Status 200 = HTTP ready (OK), [0] is always the first entry
  		if (this.readyState === 4) {
   			newMember = JSON.parse(this.responseText);
   			newMemberId = getMember[0].m_id;
   			// console.log(newMember[0].m_id);
   			information = "The member "+member.vorname+" "+member.nachname+" with the ID "+newMemberId+" has been created.";
			window.alert(information);
  		}
	}
   //console.log("STOP");	
}

// -------------------------------------------------- //
// Validations of the fields						  //
// -------------------------------------------------- //

// Function for dates; Hours and minutes will be cut off
function dateConversion(dateDelivery) {
	dateDelivery = dateDelivery.slice(0,10);
	console.log(dateDelivery);
	return dateDelivery;
}

// Function for Checkbox "Active"
function activeValidation(checkbox) {
	if (checkbox == "1") {
    	document.getElementById("aktiv").checked = true;
	} else {
		document.getElementById("aktiv").checked = false;
	}
}

// Color of the field change to grey if field is active
function enterFieldColor() {
	$(this)
		.css("backgroundColor", "f5f5f5");
}

// Color of the field change to white if field is active
function leaveFieldColor() {
	$(this)
		.css("backgroundColor", "white");
}

// Validation of field "Nachname"
function nachNaValidation() {
	var regEx = "^[a-zA-Z]+$";
	var nachNaEingabe = document.getElementById("nachname");
	if (!nachNaEingabe.value.match(regEx)){
		nachNaEingabe.style.color ="red";
		alert("Do not use numbers in field.");
	} else {
		nachNaEingabe.style.color ="black";
	}
}

// Validation of field "Vornamen"
function vorNaValidation(){
	var regEx = "^[a-zA-Z]+$";
	var vorNaEingabe = document.getElementById("vorname");
	if (!vorNaEingabe.value.match(regEx)){
		vorNaEingabe.style.color ="red";
		alert("Do not use numbers in field.");
	} else {
		vorNaEingabe.style.color ="black";
	}
}

// Validation of field "Strasse" 
function strasseValidation() {
	var regEx = "^[a-zA-Z]+$";
	var strasseEingabe = document.getElementById("strasse");
	if (!strasseEingabe.value.match(regEx)){
		strasseEingabe.style.color ="red";
		alert("Do not use numbers in field.");
	} else {
		strasseEingabe.style.color ="black";
	}
}

// Validation of field "PLZ"
function plzValidation() {
	var regEx = "^[0-9]{4}$";
	var plzEingabe = document.getElementById("plz");
	if (!plzEingabe.value.match(regEx)){
		plzEingabe.style.color ="red";
		alert("Please use four digits.");
	} else {
		plzEingabe.style.color ="black";
	}
}

// Validation of field "Ort"
function ortValidation() {
	var regEx = "^[a-zA-Z]+$";
	var ortEingabe = document.getElementById("ort");
	if (!ortEingabe.value.match(regEx)){
		ortEingabe.style.color ="red";
		alert("Do not use numbers in field.");
	} else {
		ortEingabe.style.color ="black";
	}
};





