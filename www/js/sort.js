function sort(sort_value)
	{
		console.log("Sortieren nach: "+sort_value);
		var sorted_mitgliederObj = mitgliederObj.sort(compare);
		mitgliederObj = sorted_mitgliederObj;
		function_forward("initial");
		
		function compare( a, b) {
			const nachnameA = a[sort_value].toLowerCase();
			const nachnameB = b[sort_value].toLowerCase();
		  if ( nachnameA < nachnameB ){
			return -1;
		  }
		  if ( nachnameA > nachnameB ){
			return 1;
		  }
		  return 0;
		}
	}