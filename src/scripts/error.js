$(document).ready(function(){
    $("#scream").hide();	
    $("#report").click(function(){
        $("#scream").css({"height": "20px", "width": "20px","display": "block", "margin-left": "auto", "margin-right": "auto"})
        .show()
        .animate({height: '300px',width: '300px', opacity: 0.0}, 3000);
        $("#report").hide();
    });
});