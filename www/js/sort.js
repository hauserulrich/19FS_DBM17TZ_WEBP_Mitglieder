/* This function lets you chose between ordering the entries by ID, Surname and First Name*/
function sort(sort_value)
	{
		console.log("Sortieren nach: "+sort_value);
		var sorted_mitgliederObj = mitgliederObj.sort(compare);
		mitgliederObj = sorted_mitgliederObj;
		function_forward("initial"); // makes sure, that when clicking the "forward_button" the site is automatically sorted aswell
		
		function compare( a, b) 
            {
                const nachnameA = a[sort_value].toLowerCase(); //to be able to compare and sort the names they are put into lower case
                const nachnameB = b[sort_value].toLowerCase();
		  if ( nachnameA < nachnameB )
            {
			 return -1; // puts the entry one position lower
            }
		  if ( nachnameA > nachnameB )
            {
			 return 1; // puts entry one position higher
            }
            return 0; // for when two elemets are equal
		  }
	}