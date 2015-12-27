$(document).ready(function(){
	$("#meowButton").click(function(){
		$( "body" ).add().css( "background-color", "#EB1F22").css( "color", "#A0C5BE"); 
		$( ".navbar-brand").replaceWith("<a class='navbar-brand' href='#'>Bodie Meow Design</a>");
		for (var i = 0; i < 9; i ++) {
				$( ".links" ).eq(i).replaceWith("<img class='links' src='static/img/cat" + (i+1) + ".jpg' alt='Meooooowwwww!'>   ");
		};
		$( "#week" ).replaceWith("<div id='week'><div class='box block col-md-6'>" +
		   "<a href='https://www.youtube.com/watch?t=119&v=KEgoBOZ9cug'>" +
			"<img src='static/img/cat10.jpg' id= 'newPicture' alt='Purrrrfect, like Marcus Meowiota.'" +
			"class='img-responsive center-block' width='70%'></a></div>" +
			"<div class='box block description col-md-6'>" +
			"<h4 id='catText' style='text-align: center'>"+ 
			"Fluffwork and pawscraper purrrfectly aligned in Catsville.  Purrrrfect, like Marcus Meowiota.</h4></div></div>" +
			"<style>#newPicture:hover { opacity: 0.7; filter: alpha(opacity=70); /* For IE8 and earlier */}</style>");

		$(" #feature ").replaceWith("<a href='http://www.runthejewels.net/' target='_blank'><img src='static/img/cat11.jpg' id='feature' alt = 'Meowww' class='img-responsive center-block' style='border-radius: 40px'><style> #feature:hover{box-shadow: 5px 5px 10px gray;}</style></a>");

		$("#meowButton").css("color", "white");
  		$('#myLinks').replaceWith("<h1>Meow Links:</h1>")
		$("#feature_project").replaceWith("<h1>Featured Pet</h1>");
		$("h2").eq(0).replaceWith("<h2>Welcome to Bodie Meow Design</h2>");
		$("h1#github").replaceWith("<h1>Visit my CatPaw Page<i class='fa fa-github fa-2x'></i></h1>");			
		$("h2").eq(1).replaceWith("<h2>Pet of the Week</h2>");
		$("h2").eq(2).replaceWith("<h2>Pawjects</h2>");		
		$("#aboutMe").replaceWith("<h2>About Meow</h2>");
    	$("#programmingSkills").replaceWith("<h2>Pawgramming Skills</h2>");
    	$("#contact").replaceWith("<h1 style='text-align: left'>Clawtact Me</h1>");
  		$("#adam").replaceWith("<img src= '/static/img/cat12.jpg' class='img-responsive' id='adam'>");
      $('#pictureArchive').replaceWith("<h1>Fluffture of the Week - Archive</h1>");	 
	});
});
