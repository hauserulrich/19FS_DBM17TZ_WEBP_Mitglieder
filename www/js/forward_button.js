
function init_button() {
	//Fügt dem forward-Button einen Listener hinzu
	var forward_button = document.getElementById("forward");
	forward_button.addEventListener("click", function_forward);
}

function function_forward(mitgliederObj){
	var data = mitgliederObj.length;
	var division = (data / 15);
	var modulo_division = ((data % 15)/15);
	var data_without_rest = Math.round(division - modulo_division); //Math.round als Lösung, da die Rechnung ansonsten eine Abweichung zur richtigen Lösung aufweist
	if (table_site < data_without_rest){
		counter_minimum = table_site * 15;
		counter_maximum = (table_site + 1) * 15;
		//for (var counter_minimum = table_site * 15; counter_minimum < (table_site + 1) * 15; counter_minimum++){
		table_creation(mitgliederObj, counter_minimum, counter_maximum);
		//}
	} else {
		counter_minimum = table_site * 15;
		counter_maximum = data;
	//for (var counter_minimum = table_site * 15; counter_minimum <= data; counter_minimum++){
		table_creation(mitgliederObj, counter_minimum, counter_maximum);
	};
	table_site++;
	console.log(table_site);
}

