var url_string = "http://www.xyz.ch/index.html?id=64"; //Link aus Browser URL: window.location.href // window.location.search.substring(1)
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);
