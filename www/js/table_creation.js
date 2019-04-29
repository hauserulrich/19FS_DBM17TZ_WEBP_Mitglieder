function table_creation(mitgliederObj, counter_minimum, counter_maximum){

  //body reference 
  var tbody = document.getElementsByTagName("tbody")[0];

  // row creation gesamt
  for (var counter_row = counter_minimum; counter_row < counter_maximum; counter_row++) {
	// table row creation
	var row = document.createElement("tr");

	var mitglieder_attribute = ["m_id", "nachname", "vorname", "geburtsdatum", "ort", "aktiv", "vereinsposition", "klassifizierung"];

  //cell creation
	for (var counter_cell = 0; counter_cell < mitglieder_attribute.length ; counter_cell++) {
	  // create element <td> and text node 
	  //Make text node the contents of <td> element
	  // put <td> at end of the table row
	  var cell = document.createElement("td");
	  var cellText = document.createTextNode(mitgliederObj[counter_row][mitglieder_attribute[counter_cell]]);
	 
	  cell.appendChild(cellText);
	  row.appendChild(cell);


	}

	//row added to end of table body
	tbody.appendChild(row);
  }
}