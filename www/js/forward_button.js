
function init_button_forward() 
    {
        //Creates a listener when clicking the forward button
        var forward_button = document.getElementById("forward");
        forward_button.addEventListener("click", function_forward);
    }
/* the function "function_forward" calculates how many entries will be shown on the page. If there are more than 15 entries to show,
it will activate the forward button in order for the user to be able to see max. 15 table entries*/
function function_forward(load_type)
    {
        if (load_type == "initial")
            {
                console.log("initial load");
            }

        else 
            {
            table_site++;
            };

        var data = mitgliederObj.length;
        var division = (data / 15); //Divides the totan entries by 15 
        var modulo_division = ((data % 15)/15); //Gives the rest of the entries
        var data_without_rest = Math.round(division - modulo_division); //Calculation: Total entries per site (Math.round as a result, because else there is a deviation in the result
        clear_table();
        if (table_site < data_without_rest) //creates the "number of pages" without remainder if there are more than 15 entries to be displayed
            {
                counter_minimum = table_site * 15;
                counter_maximum = (table_site + 1) * 15;
                //for (var counter_minimum = table_site * 15; counter_minimum < (table_site + 1) * 15; counter_minimum++){
                table_creation(counter_minimum, counter_maximum);
                //}
            } 
        else // if less than 15 entries, the site only has as many entries as there is data (rows)
            {
                counter_minimum = table_site * 15;
                counter_maximum = data;
            //for (var counter_minimum = table_site * 15; counter_minimum <= data; counter_minimum++){
                table_creation(counter_minimum, counter_maximum);
            };

        disabled_button(data_without_rest);
        //table_site++;
        console.log(data_without_rest);
        console.log(table_site);
        console.log("Eintrag: " + counter_minimum + " bis " + counter_maximum);
    }

