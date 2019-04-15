function init() {
//zählt die Einträge im JSON
	var count_member = 15;
	
  //body reference 
  var tbody = document.getElementsByTagName("tbody")[0];

  // row creation gesamt
  for (var counter_row = 0; counter_row <= count_member; counter_row++) {
    // table row creation
    var row = document.createElement("tr");

	//cell creation
    for (var counter_cell = 0; counter_cell < 8; counter_cell++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell is row " + counter_row + ", column " + counter_cell);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    tbody.appendChild(row);
  }
}
window.onload = init;