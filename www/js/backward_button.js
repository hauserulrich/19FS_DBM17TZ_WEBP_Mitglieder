function init_button_backward() {
	//Fügt dem backward-Button einen Listener hinzu
	var backward_button = document.getElementById("backward");
	backward_button.addEventListener("click", function_backward);
}

function function_backward(){
	table_site--;
	clear_table();
	counter_minimum = table_site * 15;
	counter_maximum = (table_site + 1) * 15;
	//for (var counter_minimum = table_site * 15; counter_minimum < (table_site + 1) * 15; counter_minimum++){
	table_creation(counter_minimum, counter_maximum);
	disabled_button();
	console.log(table_site);
	console.log("Eintrag: " + counter_minimum + " bis " + counter_maximum);
	}

 function disabled_button(max_site){
	if (table_site == 0) {
		$("#backward").addClass("btn btn-primary btn-sm disabled");
		$('#forward').removeClass('disabled');
		//console.log("button disabled");
	 }
	 else if (table_site == max_site){
		$("#forward").addClass("btn btn-primary btn-sm disabled");
		$('#backward').removeClass('disabled');
		 
	 }
	 else {
		$('#forward').removeClass('disabled');
		$('#backward').removeClass('disabled');
	 };
 }