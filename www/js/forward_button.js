
function init_button_forward() 
    {
        //Fügt dem forward-Button einen Listener hinzu
        var forward_button = document.getElementById("forward");
        forward_button.addEventListener("click", function_forward);
    }

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
        var division = (data / 15); //Anzahl Einträge dividiert durch Einträge per Seite
        var modulo_division = ((data % 15)/15); //Anzahl Resteinträge
        var data_without_rest = Math.round(division - modulo_division); //Berechnung: Anzahl komplette Seiten (Math.round als Lösung, da die Rechnung ansonsten eine Abweichung zur richtigen Lösung aufweist)
        clear_table();
        if (table_site < data_without_rest)
            {
                counter_minimum = table_site * 15;
                counter_maximum = (table_site + 1) * 15;
                //for (var counter_minimum = table_site * 15; counter_minimum < (table_site + 1) * 15; counter_minimum++){
                table_creation(counter_minimum, counter_maximum);
                //}
            } 
        else 
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

