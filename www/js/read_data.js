// -------------------------------------------------- //
// Read Data from JSON (all.php) File			  	  //
// -------------------------------------------------- //
function read_data(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		//Waiting for readyState 4 (Done) to continue
		if (this.readyState == 4 && this.status == 200){
			//add JSON entries to variable
			memberObj = JSON.parse(this.responseText);
			function_forward("initial");
		};
	}
	xmlhttp.open("GET", "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/all.php", true);
	xmlhttp.send();
}