/*"table_creation.js" creates all elements of the table dynamically and fills the cells with the defined records from the members. More details from a member can be viewd with using the variable moreInfo on the file "members.html". The header from the table stays with the eight selected elements static and can be found in the file "index.html".*/

function table_creation(counter_minimum, counter_maximum)
    { 

    var tbody = document.getElementsByTagName("tbody")[0]; // Dynamically creates <tbody> tag by calling up the site. 

    
    /*The for-directive executes that maximum 15 entries are displayed in the table. The loop compares on each pass the variable "counter row" (which corresponds with the variable "counter_minimum") with the variable "counter_maximum". Furthermore, for each pass it is creating a new row. Once the maximum is reached, new members can be loaded on the same page with using the "Vorwärts-Button" -> see in the file "forward_button.js".*/  
        
    for (var counter_row = counter_minimum; counter_row < counter_maximum; counter_row++)
        { 
   
        var moreInfo = ("./members.html?m_id=" + mitgliederObj[counter_row].m_id); /* The moreInfo variable creates a custom link refering to the m_id of the chosen person within the table. Clicking this link opens the members.html page which displays all information about the person, which is not shown in the overall table. */ 

        var row = document.createElement("tr"); /* Creates the <tr> element for row creation dynamically */

        var mitglieder_attribute = ["m_id", "nachname", "vorname", "geburtsdatum", "ort", "aktiv", "vereinsposition", "klassifizierung"]; /* The creation of an array which is getting the concerned data sets from the data base and fills the lines with the correct records in the tbody.*/


        /* The for-directive execute that every cell is filled with the correct records, which were defined with the variable mitglieder_attribute. Once the maximum of the attributes is rechead (8) the loop is concluded. */ 


        for (var counter_cell = 0; counter_cell < mitglieder_attribute.length ; counter_cell++) 
            {
          /* creates element <td> and text node and makes the text node "cellText" the contetnts of the <td> element*/
            var cell = document.createElement("td"); // creates <td> 
            var referencelink = document.createElement("a"); // create <a> element for href link
            referencelink.href = moreInfo;
            var cellText = document.createTextNode(mitgliederObj[counter_row][mitglieder_attribute[counter_cell]]);



            referencelink.appendChild(cellText);//The defined records are appended inside the cell.   
            cell.appendChild(referencelink);//The "moreInfo" is added to the cell. 
            row.appendChild(cell); //The cell is added to the row.      
            }

    
           tbody.appendChild(row); //row added to end of table body, so that table is seen on the page
        }
    }
	
	
function clear_table (){


	var Parent = document.getElementsByTagName("tbody")[0]; // Deletes all table contents
	while(Parent.hasChildNodes())
	{
	   Parent.removeChild(Parent.firstChild);
	}
}