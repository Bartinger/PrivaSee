var hash = window.location.hash.substring(1); // get hash and remove #
var domain = hash.split("/")[2];
if(domain)
	document.write(domain + " ");
else
	document.write("This site ");