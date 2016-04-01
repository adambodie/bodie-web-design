$( "body" ).css( "background-color", "red").css( "color", "white");
$("h2").replaceWith("<h2><strong>I LOVE DONALD TRUMP!!!!!</strong></h2>"); 
$("h4").replaceWith("<h2><strong>I'm proud to be Rich!  I'm proud to be White!</strong></h2>"); 

$("p").replaceWith("<p>Donald Trump!  Donald Trump is the best thing to happen to politics since Joseph McCarthy, Barry Goldwater and George W. Bush all rolled into one!  Donald Trump finally gets average Americans like me!  Donald Trump believes that I have the power!  Make America Great Again!  I have the power!  The Power!  THE POWER!!!</p><p>Thanks to Donald Trump, I'm making millions with my degree from Trump University!!!  I'm making a fortune off of Trump Vodka and my Trump Steaks are making record profits!  Thank you Donald Trump for making me believe again!  I'm a Man!  Woooooo!!!!!</p><p>Donald Trump is right: The Chinese DID invent Global Warming!  Donald Trump is right: Obama was born in Kenya!  Donald Trump is right: The Unemployment Rate is about 42%!  Donald Trump is right: Blacks kill 81% of White People!  Donald Trump is right: All Muslims are terrorists!  Donald Trump is right: Thousands in Jersey City cheered on 9/11!  Donald Trump is right: Mexico sends its criminals over the border!  Donald Trump is right: Woman are pigs!  Donald Trump is right: He does care about someone besides himself!!!</p>");
for (i = 1; i < 100; i++) {
	$("img").eq(i).replaceWith("<img src='/static/img/trump.jpg' class='img-responsive'>");
}
$(" #feature ").replaceWith("<img src='static/img/trump2.jpg' id='feature' alt = 'Donald Trump' class='img-responsive center-block'>");
$("h1").replaceWith("<h1><strong>Donald Trump is AMAZING!!!</strong></h1>"); 
$(" #gallery  ").replaceWith("<img src='static/img/trump2.jpg' alt = 'Donald Trump' class='img-responsive center-block'>");
$("footer").replaceWith("<p><strong>Donald Trump is the Future!</strong></p>"); 


