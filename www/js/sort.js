// -------------------------------------------------- //
// Sort entries associated to the attribute		  	  //
// -------------------------------------------------- //
/* This function lets you chose between ordering the entries by ID, Surname and First Name*/
function sort(sort_value){
	//console.log("Sortieren nach: "+sort_value);
	var sorted_memberObj = memberObj.sort(compare);
	memberObj = sorted_memberObj;
	function_forward("initial"); // makes sure, that when clicking the "forward_button" the site is automatically sorted aswell and will not count up the count_site
	// compare values in list for sorting
	function compare(a, b){
		if(sort_value == "m_id"){
			var valueA = parseInt(a[sort_value], 10);
			var valueB = parseInt(b[sort_value], 10);
		} else{
			var valueA = a[sort_value].toLowerCase(); //to be able to compare and sort the values they are put into lower case
			var valueB = b[sort_value].toLowerCase();
		}
		if ( valueA < valueB ){
			return -1; // puts the entry one position lower
        } else if ( valueA > valueB ){
			return 1; // puts entry one position higher
        } else{
			return 0; // for when two elemets are equal
		}
	};
}