	var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        jsonDoc = JSON.parse(xmlhttp.responseText);
        myFunction(jsonDoc);
		}
	}	
	xmlhttp.open("GET","static/data/feature.json",true);
   xmlhttp.send();
        
	function myFunction(arr) {
		var feattxt = "";
		var random = Math.floor(Math.random() * arr.length);
		if (random == 10 || random == 12 || random == 13) {
			feattxt += "<a href='http://" + arr[random].link + ".bodiewebdesign.com"
		} else {
      feattxt += "<a href='http://aduo3000.github.io/" + arr[random].link 
		}		
		feattxt += "'><img src='static/img/" + arr[random].articles 
		feattxt += ".jpg' class='img-responsive center-block'></a>"
		feattxt += "<h3 style='text-align: center'>" 
		feattxt += arr[random].title + "</h3>"
      document.getElementById("feature").innerHTML=feattxt;
}	
