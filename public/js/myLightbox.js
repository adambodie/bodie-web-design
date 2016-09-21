$(function() {
	// OVERLAY
	overlayOn = function(){
				$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
	},
	overlayOff = function(){
			$( '#imagelightbox-overlay' ).remove();
	},
	// CLOSE BUTTON
	closeButtonOn = function( instance ){
		$( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
	},
	closeButtonOff = function(){
		$( '#imagelightbox-close' ).remove();
	},
	// CAPTION
	captionOn = function(){
	var description = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "alt" );
		if( description.length > 0 )
			$( "<div id='imagelightbox-caption'>" + description + "</div>" ).appendTo( 'body' );
	},
	captionOff = function(){
		$( '#imagelightbox-caption' ).remove();
	}
	var selector = 'a[data-imagelightbox="a"]';
	var instance = $( selector ).imageLightbox({
			onStart:		function() { overlayOn(); closeButtonOn( instance ); },
			onEnd:			function() { overlayOff(); captionOff(); closeButtonOff();},
			onLoadStart: 	function() { captionOff()},
			onLoadEnd:	 	function() { captionOn();}
		});		
});