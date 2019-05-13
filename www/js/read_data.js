function read_data()
{
	var mitgliederObj;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
	  if (this.readyState == 4 && this.status == 200)
	  {
		var mitgliederObj = JSON.parse(this.responseText);
		function_forward(mitgliederObj);
	  };
	}
	xmlhttp.open("GET", "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/all.php", true);
	xmlhttp.send();
}