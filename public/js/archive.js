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
	xmlhttp.open("GET","static/data/archive.json",true);
    xmlhttp.send();
        
	function myFunction(arr) {
		var txt = "<ul id='imageGallery'>";
        for (var i = 0; i < arr.length; i++) {
            txt += "<li>"
            txt += "<a href='static/" + arr[i].image + "'data-imagelightbox='a'>" 
            txt += "<img src='static/" + arr[i].image 
            txt += "' class='img-responsive center-block' style = 'max-width: 300px' "
            txt += "alt='" + arr[i].description + "'>"
            txt += "</a>"
            txt += "<br>"
            txt += "<p>Week of " + arr[i].week + "</p>"
            txt += "<p>" + arr[i].location + ", " + arr[i].state + "</p>"
            txt += "<h4>" + arr[i].description + "</h4></li>" 
        }
        txt += "</ul>";
        document.getElementById("gallery").innerHTML=txt;
        }
        
    
        
    