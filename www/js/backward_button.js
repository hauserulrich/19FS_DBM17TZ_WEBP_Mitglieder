
/* The "backward_button.js" gives the user the opportunity to go a page (which loads automatically - no new page creation) back in the table  */

function init_button_backward() 
{
	//creates a listener for the Backward-Button by clicking the button
	var backward_button = document.getElementById("backward");
	backward_button.addEventListener("click", function_backward);
}


function function_backward()
{
	// on clicking the button, the page will load the previous 15 entries
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

 function disabled_button(max_site)
 {
 	// backward button is disabled for page 0, forward button is enabled
	if (table_site == 0) 
	{
		$("#backward").addClass("btn btn-primary btn-sm disabled");
		$('#forward').removeClass('disabled');
		//console.log("button disabled");
	 }
	 // when there are no more entries to show the forward button is disabled, the backward button active
	 else if (table_site == max_site)
	 {
	 	$("#forward").addClass("btn btn-primary btn-sm disabled");
		$('#backward').removeClass('disabled'); 
	 }
	 // when there are enough table entries both buttons are active
	 else 
	 {
		$('#forward').removeClass('disabled');
		$('#backward').removeClass('disabled');
	 };
 }
 